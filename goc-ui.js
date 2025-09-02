
// ============== GOC UI (Floating Bar Clear) ==============
// One file: Floating bar + Translate + Theme (dark/light/color) + LICENSEGOC panel + Quick links
(function(){
  if (window.__GOC_UI__) return; window.__GOC_UI__=true;

  // ---------- CSS (always on top, super high z-index) ----------
  const css=`
    :root{
      --goc-bg:#0a0b0f; --goc-panel:#101319; --goc-ink:#eae7dc; --goc-muted:#a8b3c7;
      --goc-line:rgba(255,215,0,.26); --goc-gold:#f5d36a; --goc-accent:#ffd66b;
      --goc-fab:92px;
      --goc-space-bottom: 94px; /* chừa chỗ cho bar */
    }
    html,body{background:var(--goc-bg); color:var(--goc-ink)}
    /* tránh bar che footer */
    footer,.space,[data-goc-space]{min-height:var(--goc-space-bottom)}

    /* ---------- Floating Bar ---------- */
    .goc-bar{position:fixed; left:0; right:0; bottom:0; z-index:2147483646;
      display:flex; gap:8px; flex-wrap:wrap; align-items:center; justify-content:center;
      padding:10px; background:rgba(13,13,15,.55); backdrop-filter:blur(10px);
      border-top:1px solid var(--goc-line); box-shadow:0 -8px 28px rgba(0,0,0,.35)}
    .goc-bar a,.goc-bar button{appearance:none; border:1px solid rgba(245,211,106,.35);
      background:linear-gradient(180deg,#1a1f29,#0f1117);
      color:var(--goc-ink); font-weight:700; border-radius:999px; padding:10px 16px;
      text-decoration:none; cursor:pointer}
    .goc-bar a:hover,.goc-bar button:hover{box-shadow:inset 0 0 0 1px rgba(255,255,255,.06),
      0 8px 22px rgba(0,0,0,.35)}
    .goc-pill{display:inline-flex; align-items:center; gap:8px}
    .goc-sel{background:transparent; border:none; color:inherit; font-weight:700}

    /* ---------- Theme badges ---------- */
    .goc-theme{display:inline-flex; gap:6px; align-items:center}
    .goc-dot{width:12px;height:12px;border-radius:50%}
    .goc-dark .goc-dot{background:#222}
    .goc-light .goc-dot{background:#ddd}
    .goc-color .goc-dot{background:linear-gradient(45deg,#ffd66b,#88e);}

    /* ---------- LICENSEGOC Panel ---------- */
    .goc-panel{position:fixed; right:12px; bottom:calc(var(--goc-space-bottom) + 12px);
      z-index:2147483647; width:min(92vw,680px); max-height:min(76vh,700px);
      overflow:auto; padding:18px; background:linear-gradient(180deg,#0f1117,#0a0b0f);
      border:1px solid var(--goc-line); border-radius:16px; box-shadow:0 12px 38px rgba(0,0,0,.45);
      display:none}
    .goc-panel.open{display:block}
    .goc-panel h3{margin:0 0 8px}
    .goc-panel .row{display:grid; grid-template-columns:140px 1fr; gap:10px; padding:8px 0;
      border-top:1px dashed var(--goc-line)}
    .goc-x{position:absolute; top:8px; right:10px; border:none; background:transparent;
      color:var(--goc-ink); font-size:22px; cursor:pointer}
    /* ---------- Translate tray minimal ---------- */
    #google_translate_element{position:fixed; right:12px; bottom:calc(var(--goc-space-bottom) + 12px);
      z-index:2147483647; background:linear-gradient(180deg,#0f1117,#0a0b0f);
      border:1px solid var(--goc-line); border-radius:12px; padding:12px; display:none}
  `;
  const style=document.createElement('style'); style.textContent=css; document.head.appendChild(style);

  // ---------- Theme engine ----------
  const THEMES={dark:1, light:1, color:1};
  const applyTheme=(t)=>{
    const r=document.documentElement; r.dataset.gocTheme=t;
    if(t==='light'){ r.style.setProperty('--goc-bg','#f7f8fc'); r.style.setProperty('--goc-panel','#ffffff'); r.style.setProperty('--goc-ink','#11151c'); r.style.setProperty('--goc-line','rgba(0,0,0,.12)');}
    else if(t==='color'){ r.style.setProperty('--goc-bg','#0b0e18'); r.style.setProperty('--goc-panel','#0e1220'); r.style.setProperty('--goc-ink','#f3f5ff'); r.style.setProperty('--goc-line','rgba(156,120,255,.3)');}
    else{ r.style.setProperty('--goc-bg','#0a0b0f'); r.style.setProperty('--goc-panel','#101319'); r.style.setProperty('--goc-ink','#eae7dc'); r.style.setProperty('--goc-line','rgba(255,215,0,.26)');}
    localStorage.setItem('goc.theme',t);
  };
  applyTheme(localStorage.getItem('goc.theme')||'dark');

  // ---------- Floating Bar DOM ----------
  function ensureBar(){
    if(document.querySelector('.goc-bar')) return;
    const bar=document.createElement('nav');
    bar.className='goc-bar';
    bar.innerHTML=`
      <a href="index.html"><b>Home</b></a>
      <a href="creationsroom.html"><b>Creations Room</b></a>
      <a href="paycards.html"><b>Pay & Cards</b></a>
      <a href="vault.html"><b>Vault</b></a>
      <a href="submit.html"><b>Submit</b></a>
`;
      <button id="goc-open-panel" class="goc-pill"><span>LICENSEGOC</span></button>
      

      <span class="goc-pill">🌐
        <select id="goc-lang" class="goc-sel">
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

    // theme buttons
    bar.querySelector('.goc-dark').onclick = ()=>applyTheme('dark');
    bar.querySelector('.goc-light').onclick= ()=>applyTheme('light');
    bar.querySelector('.goc-color').onclick= ()=>applyTheme('color');

    // panel
    document.getElementById('goc-open-panel').onclick=()=>togglePanel(true);
  }

  // ---------- LICENSEGOC panel ----------
  function makePanel(){
    if(document.querySelector('.goc-panel')) return;
    const p=document.createElement('aside');
    p.className='goc-panel';
    p.innerHTML=`
      <button class="goc-x" aria-label="Close">×</button>
      <h3>LICENSE GÓC™ — Overview</h3>
      <div class="row"><b>LICENSENETWORK</b><span>Global copyright social network</span></div>
      <div class="row"><b>Pay & Cards</b><span>Tokenized cards, invoices, disputes</span></div>
      <div class="row"><b>Submit Idea / Work</b><span>Timestamp + protection</span></div>
      <div class="row"><b>Vault</b><span>Identity & wallets (demo/local)</span></div>
      <div class="row"><b>Apps</b><span>Integrations & community tools</span></div>
      <div class="row"><b>News/Media</b><span>Pictures, videos, arts (editable later)</span></div>
    `;
    p.querySelector('.goc-x').onclick=()=>togglePanel(false);
    document.body.appendChild(p);
  }
  function togglePanel(open){
    const p=document.querySelector('.goc-panel'); if(!p) return;
    p.classList.toggle('open',open);
  }

  // ---------- Translate (Google widget) ----------
  function ensureTranslate(){
    if (document.getElementById('google_translate_element')) return;
    const box=document.createElement('div'); box.id='google_translate_element'; document.body.appendChild(box);
    const s=document.createElement('script');
    s.src='https://translate.google.com/translate_a/element.js?cb=__gocInitTranslate'; document.head.appendChild(s);
    window.__gocInitTranslate=function(){
      new google.translate.TranslateElement({pageLanguage:'vi', includedLanguages:'en,vi,ja,ko,zh-CN,fr,de,es'}, 'google_translate_element');
      // mở hộp khi chọn
      const sel=document.getElementById('goc-lang');
      if(sel){ sel.onchange=()=>{ box.style.display='block'; }; }
    };
  }

  // ---------- Boot ----------
  window.addEventListener('DOMContentLoaded', ()=>{
    ensureBar();
    makePanel();
    ensureTranslate();
    // chừa khoảng dưới cho bar
    if(!document.querySelector('[data-goc-space]')){
      const sp=document.createElement('div'); sp.setAttribute('data-goc-space',''); document.body.appendChild(sp);
    }
  });
})();

