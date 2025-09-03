
/* ============== GOC UI (Floating Bar Clear) — One file ============== */
(function () {
  /* --------- De-dupe --------- */
  if (window.__GOC_UI__) return;
  window.__GOC_UI__ = true;

  /* --------- CSS --------- */
  const css = `
  :root{
    --goc-bg:#0a0b0f; --goc-panel:#101319; --goc-ink:#eae7dc; --goc-muted:#a8b3c7;
    --goc-line:rgba(255,215,0,.26); --goc-space-bottom:94px;
  }
  html,body{background:var(--goc-bg); color:var(--goc-ink)}
  footer,.space,[data-goc-space]{min-height:var(--goc-space-bottom)}

  /* Bar */
  .goc-bar{position:fixed;left:0;right:0;bottom:0;z-index:2147483646;
    display:flex;gap:8px;flex-wrap:wrap;align-items:center;justify-content:center;
    padding:10px;background:rgba(13,13,15,.55);backdrop-filter:blur(10px);
    border-top:1px solid var(--goc-line);box-shadow:0 -8px 28px rgba(0,0,0,.35)}
  .goc-bar a,.goc-bar button{appearance:none;border:1px solid rgba(245,211,106,.35);
    background:linear-gradient(180deg,#1a1f29,#0f1117);color:var(--goc-ink);
    font-weight:700;border-radius:999px;padding:10px 16px;text-decoration:none;cursor:pointer}
  .goc-bar a:hover,.goc-bar button:hover{box-shadow:inset 0 0 0 1px rgba(255,255,255,.06),0 8px 22px rgba(0,0,0,.35)}
  .goc-pill{display:inline-flex;align-items:center;gap:8px}
  .goc-sel{background:transparent;border:none;color:inherit;font-weight:700}
  .goc-hidden{display:none!important}
  .goc-collapse{border-radius:999px;padding:10px 12px;margin-right:6px;font-weight:900}

  /* blink collapse */
  @keyframes gocBlink{0%,60%{opacity:1;transform:scale(1)}30%{opacity:.55}100%{transform:scale(1.06)}}
  .goc-blink{animation:gocBlink 2.2s ease-in-out infinite}

  /* bubble khi thu gọn */
  @keyframes gocPulse{0%,70%{opacity:0;transform:scale(1)}85%{opacity:.7;transform:scale(1.06)}100%{opacity:0;transform:scale(1)}}
  .goc-bubble{position:fixed;left:12px;bottom:12px;z-index:2147483647;
    width:48px;height:48px;border-radius:12px;cursor:pointer;display:none;
    border:1px solid rgba(245,211,106,.35);
    background:linear-gradient(180deg,#1a1f29,#0f1117);color:#ffd66b;font-weight:900;
    box-shadow:0 10px 28px rgba(0,0,0,.45);align-items:center;justify-content:center}
  .goc-bubble::after{content:"";position:absolute;inset:-6px;border-radius:14px;
    box-shadow:0 0 18px rgba(255,214,107,.45);opacity:0;animation:gocPulse 4.8s ease-out infinite}
  .goc-bubble.show{display:flex}

  /* Panel LICENSEGOC */
  .goc-panel{position:fixed;right:12px;bottom:calc(var(--goc-space-bottom) + 12px);
    z-index:2147483647;width:min(92vw,680px);max-height:min(76vh,700px);overflow:auto;
    padding:18px;background:linear-gradient(180deg,#0f1117,#0a0b0f);
    border:1px solid var(--goc-line);border-radius:16px;box-shadow:0 12px 38px rgba(0,0,0,.45);display:none}
  .goc-panel.open{display:block}
  .goc-panel h3{margin:0 0 8px}
  .goc-panel .row{display:grid;grid-template-columns:140px 1fr;gap:10px;padding:8px 0;border-top:1px dashed var(--goc-line)}
  .goc-x{position:absolute;top:8px;right:10px;border:none;background:transparent;color:var(--goc-ink);font-size:22px;cursor:pointer}

  /* Translate tray */
  #google_translate_element{position:fixed;right:12px;bottom:calc(var(--goc-space-bottom) + 12px);
    z-index:2147483647;background:linear-gradient(180deg,#0f1117,#0a0b0f);
    border:1px solid var(--goc-line);border-radius:12px;padding:12px;display:none}

  /* Profile menu */
  .goc-prof{position:relative}
  .goc-prof-btn{display:inline-flex;align-items:center;gap:8px}
  .goc-avatar{width:18px;height:18px;border-radius:50%;display:inline-grid;place-items:center;
    background:linear-gradient(180deg,#ffd66b,#f5c64a);color:#111;font-weight:900}
  .goc-prof-menu{position:fixed;right:12px;bottom:calc(var(--goc-space-bottom) + 12px);
    width:min(92vw,290px);background:linear-gradient(180deg,#0f1117,#0a0b0f);
    border:1px solid var(--goc-line);border-radius:14px;box-shadow:0 16px 38px rgba(0,0,0,.45);
    display:none;overflow:hidden;z-index:2147483647}
  .goc-prof-menu.open{display:block}
  .goc-prof-menu header{display:flex;align-items:center;gap:8px;padding:10px 12px;border-bottom:1px solid var(--goc-line)}
  .goc-prof-menu .sec{padding:10px 12px;border-top:1px dashed var(--goc-line)}
  .goc-prof-menu .row{display:flex;gap:8px;flex-wrap:wrap}
  .goc-prof-menu a,.goc-prof-menu button{appearance:none;border:1px solid rgba(245,211,106,.35);
    background:linear-gradient(180deg,#1a1f29,#0f1117);color:var(--goc-ink);
    border-radius:999px;padding:8px 12px;font-weight:700;text-decoration:none;cursor:pointer}
  .goc-badge{display:inline-grid;place-items:center;min-width:18px;height:18px;padding:0 4px;background:#ff6b6b;border-radius:999px;color:#fff;font-size:12px;font-weight:800}

  /* Rooms panel */
  .goc-rooms{position:fixed;left:12px;bottom:calc(var(--goc-space-bottom) + 12px);
    width:min(92vw,360px);background:linear-gradient(180deg,#0f1117,#0a0b0f);
    border:1px solid var(--goc-line);border-radius:14px;box-shadow:0 16px 38px rgba(0,0,0,.45);
    display:none;overflow:hidden;z-index:2147483647}
  .goc-rooms.open{display:block}
  .goc-rooms header{display:flex;align-items:center;gap:8px;padding:10px 12px;border-bottom:1px solid var(--goc-line)}
  .goc-rooms .sec{padding:10px 12px;border-top:1px dashed var(--goc-line)}
  .goc-rooms .member{display:flex;align-items:center;gap:8px;padding:6px 0}
  .goc-rooms .m-dot{width:14px;height:14px;border-radius:50%;
    background:radial-gradient(circle at 30% 30%,#fff,#ffd66b 45%,transparent 70%);
    box-shadow:0 0 12px rgba(255,214,107,.5)}
  `;
  const style = document.createElement('style');
  style.textContent = css; document.head.appendChild(style);

  /* --------- Theme (apply only; callable) --------- */
  function applyTheme(t){
    const r=document.documentElement;
    if(t==='light'){
      r.style.setProperty('--goc-bg','#f7f8fc'); r.style.setProperty('--goc-panel','#ffffff');
      r.style.setProperty('--goc-ink','#11151c'); r.style.setProperty('--goc-line','rgba(0,0,0,.12)');
    }else if(t==='color'){
      r.style.setProperty('--goc-bg','#0b0e18'); r.style.setProperty('--goc-panel','#0e1220');
      r.style.setProperty('--goc-ink','#f3f5ff'); r.style.setProperty('--goc-line','rgba(156,120,255,.3)');
    }else{
      r.style.setProperty('--goc-bg','#0a0b0f'); r.style.setProperty('--goc-panel','#101319');
      r.style.setProperty('--goc-ink','#eae7dc'); r.style.setProperty('--goc-line','rgba(255,215,0,.26)');
    }
    localStorage.setItem('goc.theme', t);
  }
  applyTheme(localStorage.getItem('goc.theme') || 'dark');
  window.gocApplyTheme = applyTheme;

  /* --------- Collapse / Expand --------- */
  function collapseBar(){
    const bar = document.querySelector('.goc-bar');
    const bub = document.getElementById('goc-bubble');
    if(!bar||!bub) return;
    bar.classList.add('goc-hidden'); bub.classList.add('show');
    localStorage.setItem('goc.bar.collapsed','1');
  }
  function expandBar(){
    const bar = document.querySelector('.goc-bar');
    const bub = document.getElementById('goc-bubble');
    if(!bar||!bub) return;
    bar.classList.remove('goc-hidden'); bub.classList.remove('show');
    localStorage.removeItem('goc.bar.collapsed');
  }

  /* --------- Floating Bar --------- */
  function ensureBar(){
    if (document.querySelector('.goc-bar')) return;
    const bar = document.createElement('nav');
    bar.className = 'goc-bar';
    bar.innerHTML = `
      <button type="button" class="goc-collapse goc-blink" id="goc-collapse" title="Thu gọn menu">🎇</button>
      <a href="index.html"><b>Home</b></a>
      <a href="licensenetwork.html"><b>LICENSENETWORK</b></a>
      <a href="creationsroom.html"><b>Creations Room</b></a>
      <a href="licensecoin.html"><b>LICENSECOIN</b></a>
      <a href="paycards.html"><b>Pay &amp; Cards</b></a>
      <a href="vault.html"><b>Vault</b></a>
      <a href="submit.html"><b>Submit</b></a>

      <button id="goc-rooms-btn" class="goc-pill">Rooms</button>
      <button id="goc-open-panel" class="goc-pill"><span>LICENSEGOC</span></button>

      <span class="goc-prof">
        <button id="goc-prof-btn" class="goc-pill goc-prof-btn" aria-expanded="false" title="Account">
          <span id="goc-av" class="goc-avatar">👤</span><b id="goc-prof-name">Guest</b>
        </button>
      </span>

      <button id="goc-ai" class="goc-pill">AI TIM ❤️</button>

      <span class="goc-pill">🌐
        <select id="goc-lang" class="goc-sel" aria-label="Translate">
          <option value="">Translate</option>
          <option value="en">English</option>
          <option value="vi">Tiếng Việt</option>
          <option value="ja">日本語</option>
          <option value="ko">한국어</option>
          <option value="zh-CN">简体中文</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
          <option value="es">Español</option>
        </select>
      </span>
    `;
    document.body.appendChild(bar);

    // bubble
    let bubble = document.querySelector('.goc-bubble');
    if(!bubble){
      bubble = document.createElement('button');
      bubble.className = 'goc-bubble'; bubble.id = 'goc-bubble';
      bubble.title = 'Mở menu'; bubble.textContent = '≡';
      document.body.appendChild(bubble);
    }

    // events
    const btnCollapse = document.getElementById('goc-collapse');
    btnCollapse && (btnCollapse.onclick = collapseBar);
    bubble && (bubble.onclick = expandBar);

    document.getElementById('goc-open-panel')?.addEventListener('click', ()=>togglePanel(true));
    document.getElementById('goc-ai')?.addEventListener('click', ()=>{ location.href = 'licensenetwork.html#aitim'; });

    // profile menu DOM
    ensureProfileMenu();
    // rooms panel DOM
    ensureRooms();
  }

  /* --------- LICENSEGOC Panel --------- */
  function makePanel(){
    if (document.querySelector('.goc-panel')) return;
    const p = document.createElement('aside');
    p.className = 'goc-panel';
    p.innerHTML = `
      <button class="goc-x" aria-label="Close">×</button>
      <h3>LICENSE GỐC™ — Overview</h3>
      <div class="row"><b>LICENSENETWORK</b><span>Global copyright social network</span></div>
      <div class="row"><b>Pay &amp; Cards</b><span>Tokenized cards, invoices, disputes</span></div>
      <div class="row"><b>Submit Idea / Work</b><span>Timestamp + protection</span></div>
      <div class="row"><b>Vault</b><span>Identity &amp; wallets (demo/local)</span></div>
      <div class="row"><b>Apps</b><span>Integrations &amp; community tools</span></div>
      <div class="row"><b>News/Media</b><span>Pictures, videos, arts</span></div>
    `;
    p.querySelector('.goc-x').addEventListener('click', ()=>togglePanel(false));
    document.body.appendChild(p);
  }
  function togglePanel(open){
    const p = document.querySelector('.goc-panel'); if (!p) return;
    p.classList.toggle('open', open);
  }

  /* --------- Translate --------- */
  function ensureTranslate(){
    if (document.getElementById('google_translate_element')) return;
    const box = document.createElement('div'); box.id = 'google_translate_element'; document.body.appendChild(box);
    const s = document.createElement('script');
    s.src = 'https://translate.google.com/translate_a/element.js?cb=__gocInitTranslate';
    document.head.appendChild(s);
    window.__gocInitTranslate = function(){
      new google.translate.TranslateElement(
        {pageLanguage:'vi', includedLanguages:'en,vi,ja,ko,zh-CN,fr,de,es'},
        'google_translate_element'
      );
      const sel = document.getElementById('goc-lang');
      if (sel) sel.onchange = ()=>{ box.style.display = 'block'; };
    };
  }

  /* --------- Profile menu --------- */
  function ensureProfileMenu(){
    if (document.getElementById('goc-prof-menu')) return;
    const pm = document.createElement('aside');
    pm.id = 'goc-prof-menu'; pm.className = 'goc-prof-menu';
    pm.innerHTML = `
      <header>
        <span class="goc-avatar" id="goc-av-big">👤</span>
        <div style="margin-left:6px">
          <div style="font-weight:800" id="goc-prof-title">Guest</div>
          <div style="opacity:.7;font-size:12px" id="goc-prof-sub">Not signed in</div>
        </div>
        <div style="margin-left:auto"><span id="goc-prof-badge" class="goc-badge" style="display:none">0</span></div>
      </header>

      <div class="sec">
        <div class="row">
          <a href="account.html">My Profile</a>
          <a href="vault.html">Wallet / Vault</a>
          <a href="settings.html">Settings</a>
        </div>
      </div>

      <div class="sec">
        <div style="font-weight:800;margin-bottom:6px">Theme</div>
        <div class="row">
          <button type="button" id="goc-th-dark">Dark</button>
          <button type="button" id="goc-th-light">Light</button>
          <button type="button" id="goc-th-color">Colors</button>
        </div>
      </div>

      <div class="sec">
        <div style="font-weight:800;margin-bottom:6px">Quick language</div>
        <div class="row">
          <button type="button" data-lang="en">English</button>
          <button type="button" data-lang="vi">Tiếng Việt</button>
          <button type="button" data-lang="ja">日本語</button>
          <button type="button" data-lang="zh-CN">中文</button>
        </div>
      </div>

      <div class="sec" id="goc-recent-sec" style="display:none">
        <div style="font-weight:800;margin-bottom:6px">Recent pages</div>
        <div class="row" id="goc-recent-list"></div>
      </div>

      <div class="sec">
        <div class="row">
          <a href="login.html" id="goc-signin">Sign in</a>
          <button type="button" id="goc-logout">Log out</button>
        </div>
      </div>
    `;
    document.body.appendChild(pm);

    const profBtn = document.getElementById('goc-prof-btn');
    function toggleProf(open){
      pm.classList.toggle('open', open);
      profBtn?.setAttribute('aria-expanded', open ? 'true' : 'false');
    }
    profBtn?.addEventListener('click', ()=>toggleProf(!pm.classList.contains('open')));
    document.addEventListener('click', (e)=>{ if(!pm.contains(e.target) && !profBtn?.contains(e.target)) toggleProf(false); });
    document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') toggleProf(false); });

    // theme quick
    document.getElementById('goc-th-dark') ?.addEventListener('click', ()=>applyTheme('dark'));
    document.getElementById('goc-th-light')?.addEventListener('click', ()=>applyTheme('light'));
    document.getElementById('goc-th-color')?.addEventListener('click', ()=>applyTheme('color'));

    // lang quick
    pm.querySelectorAll('[data-lang]').forEach(b=>{
      b.addEventListener('click', ()=>{
        const tray = document.getElementById('google_translate_element');
        if(tray) tray.style.display='block';
        const sel = document.getElementById('goc-lang');
        if(sel){ sel.value = b.getAttribute('data-lang'); sel.dispatchEvent(new Event('change')); }
      });
    });

    // recent pages
    (function(){
      const key='goc.recent';
      try{
        const cur = location.pathname.replace(/^\/+/,'') || 'index.html';
        const list = JSON.parse(localStorage.getItem(key)||'[]').filter(x=>x!==cur);
        list.unshift(cur); localStorage.setItem(key, JSON.stringify(list.slice(0,6)));
      }catch(e){}
      try{
        const list = JSON.parse(localStorage.getItem(key)||'[]');
        const wrap = document.getElementById('goc-recent-list');
        const sec  = document.getElementById('goc-recent-sec');
        if(wrap && list.length){
          wrap.innerHTML = list.map(p=>`<a href="${p}">${p.replace('.html','')}</a>`).join('');
          sec.style.display='block';
        }
      }catch(e){}
    })();

    // user display (demo từ localStorage / SDK tuỳ tích hợp sau)
    (function(){
      const u = (window.getUser && window.getUser()) || null;
      const nameEl = document.getElementById('goc-prof-name');
      const titEl  = document.getElementById('goc-prof-title');
      const subEl  = document.getElementById('goc-prof-sub');
      const av     = document.getElementById('goc-av');
      const avb    = document.getElementById('goc-av-big');
      const badge  = document.getElementById('goc-prof-badge');

      const name = u?.name || (u?.email ? u.email.split('@')[0] : 'Guest');
      nameEl && (nameEl.textContent = name);
      titEl  && (titEl.textContent  = name);
      subEl  && (subEl.textContent  = u?.email || 'Not signed in');

      const initial = (name||'G').charAt(0).toUpperCase();
      [av,avb].forEach(x=>{ if(x){ x.textContent=initial; }});

      try{
        const n = parseInt(localStorage.getItem('goc.notif')||'0',10);
        if(n>0){ badge.style.display='inline-grid'; badge.textContent = n>99?'99+':String(n); }
      }catch(e){}
    })();

    // logout demo
    document.getElementById('goc-logout')?.addEventListener('click', ()=>{
      try{ Object.keys(localStorage).forEach(k=>{ if(/^lcn_|^goc_/.test(k)) localStorage.removeItem(k); }); }catch(e){}
      location.href='index.html';
    });
  }

  /* --------- Rooms (demo hiện diện cục bộ) --------- */
  function ensureRooms(){
    if (document.getElementById('goc-rooms')) return;
    const wrap = document.createElement('aside');
    wrap.id='goc-rooms'; wrap.className='goc-rooms';
    wrap.innerHTML = `
      <header><b>Rooms</b><div style="margin-left:auto"><button class="goc-x" id="goc-rooms-x">×</button></div></header>
      <div class="sec">
        <div style="font-weight:800;margin-bottom:6px">Room hiện tại</div>
        <div id="goc-room-name" style="opacity:.85">—</div>
      </div>
      <div class="sec">
        <div style="font-weight:800;margin-bottom:6px">Join / Update name</div>
        <div class="row">
          <input id="goc-room-nick" placeholder="Tên hiển thị" style="flex:1;min-width:140px;background:#0c0e12;border:1px solid rgba(255,255,255,.08);color:var(--goc-ink);padding:8px 10px;border-radius:10px">
          <button id="goc-room-join">Join</button>
        </div>
      </div>
      <div class="sec">
        <div style="font-weight:800;margin-bottom:6px">Members (live ~30s)</div>
        <div id="goc-room-list"></div>
      </div>
    `;
    document.body.appendChild(wrap);

    const btn = document.getElementById('goc-rooms-btn');
    const close = document.getElementById('goc-rooms-x');
    btn?.addEventListener('click', ()=>wrap.classList.toggle('open'));
    close?.addEventListener('click', ()=>wrap.classList.remove('open'));

    // Chỉ bật Rooms cho 2 trang chính
    const path = (location.pathname||'').toLowerCase();
    const enabled = path.includes('licensenetwork') || path.includes('creationsroom');
    if(!enabled){ btn?.classList.add('goc-hidden'); return; }

    // Room id theo trang
    const roomId = path.includes('licensenetwork') ? 'room_licensenetwork' : 'room_creationsroom';
    const KEY = (k)=>`goc.rooms.${roomId}.${k}`;
    const now = ()=>Date.now();

    function purify(list){
      const cutoff = now() - 5*60*1000; // 5 phút không ping -> xoá
      return list.filter(m=> (m && m.ts && m.ts>cutoff));
    }
    function load(){ try{ return purify(JSON.parse(localStorage.getItem(KEY('members'))||'[]')); }catch(e){ return []; } }
    function save(list){ localStorage.setItem(KEY('members'), JSON.stringify(list)); }

    function myId(){
      let id = localStorage.getItem(KEY('me'));
      if(!id){ id = 'M'+Math.random().toString(36).slice(2,8).toUpperCase(); localStorage.setItem(KEY('me'), id); }
      return id;
    }
    function myName(){ return localStorage.getItem(KEY('name')) || 'Guest'; }

    function render(){
      document.getElementById('goc-room-name').textContent =
        roomId==='room_licensenetwork' ? 'LICENSENETWORK — Main Room' : 'CREATIONSROOM — Main Room';
      document.getElementById('goc-room-nick').value = myName();

      const box = document.getElementById('goc-room-list');
      const list = load();
      if(!list.length){ box.innerHTML = `<div style="opacity:.65">Không có ai trong phòng.</div>`; return; }
      box.innerHTML = list
        .sort((a,b)=>b.ts-a.ts)
        .map(m=>`<div class="member"><span class="m-dot"></span><div><b>${escapeHTML(m.name||'Guest')}</b><div style="opacity:.65;font-size:12px">${new Date(m.ts).toLocaleTimeString()}</div></div></div>`)
        .join('');
    }

    function join(name){
      const id = myId();
      localStorage.setItem(KEY('name'), name||'Guest');
      let list = load();
      const ix = list.findIndex(m=>m.id===id);
      const rec = { id, name: name||'Guest', ts: now() };
      if(ix<0) list.unshift(rec); else list[ix]=rec;
      save(list); render();
    }
    function ping(){
      const id = myId();
      let list = load();
      const ix = list.findIndex(m=>m.id===id);
      if(ix>=0){ list[ix].ts = now(); } else { list.unshift({id, name: myName(), ts: now()}); }
      list = purify(list); save(list);
      render();
    }

    document.getElementById('goc-room-join').addEventListener('click', ()=>{
      const v = (document.getElementById('goc-room-nick').value||'').trim();
      join(v||'Guest');
    });

    // tick ~30s
    ping();
    setInterval(ping, 30*1000);
  }

  /* --------- Utils --------- */
  function escapeHTML(s){ return String(s).replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c])); }

  /* --------- Boot --------- */
  window.addEventListener('DOMContentLoaded', ()=>{
    ensureBar();
    makePanel();
    ensureTranslate();

    if (!document.querySelector('[data-goc-space]')){
      const sp = document.createElement('div'); sp.setAttribute('data-goc-space',''); document.body.appendChild(sp);
    }
    const collapsed = localStorage.getItem('goc.bar.collapsed') === '1';
    const bar = document.querySelector('.goc-bar');
    const bub = document.getElementById('goc-bubble');
    if (collapsed && bar && bub){ bar.classList.add('goc-hidden'); bub.classList.add('show'); }
  });
})();
