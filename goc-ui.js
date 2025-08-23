/* LICENSE GỐC™ — Global UI (Hero + Logo + Float Bar + AI Tim + Translate)
   One file to rule all pages.  — Tim ❤️
   Default logo path: assets/logo-goc.png  (override via <meta name="goc-logo" content="...">)
   Default brand: page <title> or "LICENSE GỐC™" (override via <meta name="goc-brand">)
   Default tagline: “Protect the Roots. Empower Humanity.” (override via <meta name="goc-tagline">)
*/

(function () {
  // ===== Helpers: read optional meta overrides =====
  function meta(name, fallback) {
    const m = document.querySelector(`meta[name="${name}"]`);
    return (m && m.content) ? m.content : fallback;
  }
  const LOGO = meta('goc-logo', 'assets/logo-goc.png');
  const BRAND = meta('goc-brand', document.title || 'LICENSE GỐC™');
  const TAGL  = meta('goc-tagline', '“Protect the Roots. Empower Humanity.”');

  // ===== CSS =====
  const css = `
  :root{
    --bg:#0a0b0f; --panel:#111; --text:#eae7dc;
    --gold:#f5d36a; --line:rgba(245,211,106,.28); --radius:16px;
  }
  *{box-sizing:border-box}
  body{background:var(--bg); color:var(--text); margin:0; font-family:system-ui,-apple-system,Segoe UI,Roboto,Inter,Arial,sans-serif}
  a{color:inherit; text-decoration:none}

  /* HERO (auto-injected top of body) */
  .goc-hero{
    min-height:46vh; display:grid; place-items:center; text-align:center;
    background:radial-gradient(1200px 600px at 50% -20%, rgba(80,120,255,.12), transparent 70%);
    position:relative; overflow:hidden; padding:24px 12px;
  }
  .goc-hero .logo{width:min(360px,70vw); aspect-ratio:1/1; object-fit:contain; filter:drop-shadow(0 10px 40px rgba(0,0,0,.6))}
  .goc-hero .brand{font-weight:800; letter-spacing:.02em; font-size:clamp(22px,4.2vw,32px); margin-top:10px}
  .goc-hero .tagline{opacity:.85; font-size:clamp(14px,2.6vw,18px); margin-top:6px}

  /* FLOAT BAR (xuất hiện mọi trang) */
  .apps-nav{
    position:sticky; bottom:12px; left:0; right:0;
    display:flex; flex-wrap:wrap; gap:10px; justify-content:center; align-items:center;
    margin:24px auto 0; padding:10px 12px; max-width:1100px; z-index:40;
    background:rgba(13,13,15,.55); border:1px solid var(--line); border-radius:12px; backdrop-filter: blur(10px);
  }
  .apps-nav a, .apps-nav button{
    font-weight:700; padding:10px 16px; border-radius:999px; cursor:pointer;
    color:#ffd54d; border:1px solid rgba(255,213,77,.35);
    background:linear-gradient(180deg,#0f0f12,#0b0b0e);
    box-shadow:inset 0 0 0 1px rgba(255,255,255,.05), 0 6px 18px rgba(0,0,0,.35);
    transition:.2s transform ease;
  }
  .apps-nav a:hover, .apps-nav button:hover{ transform:translateY(-2px) }

  .lang-pill{ display:flex; gap:8px; align-items:center; padding:6px 10px; border-radius:999px;
    border:1px solid rgba(255,213,77,.28); background:linear-gradient(180deg,#101217,#0b0d12); color:#ffd54d; }
  .lang-pill select{ background:transparent; border:none; color:#ffd54d; font-weight:700; outline:none; }

  /* AI Tim */
  .tim-fab{
    position:fixed; right:18px; bottom:86px; z-index:50; width:64px; height:64px; border-radius:50%;
    background:linear-gradient(180deg,#1b1f2a,#10131a);
    display:grid; place-items:center; border:1px solid rgba(229,200,107,.35);
    box-shadow:0 12px 30px rgba(0,0,0,.45), 0 0 0 3px rgba(245,211,106,.12); overflow:hidden; cursor:pointer;
  }
  .tim-fab img{width:100%;height:100%;object-fit:cover}
  .tim-chat{
    position:fixed; right:18px; bottom:158px; width:min(420px,92vw); display:none; flex-direction:column; overflow:hidden; z-index:60;
    background:rgba(17,17,19,.92); border:1px solid var(--line); border-radius:16px; box-shadow:0 18px 40px rgba(0,0,0,.55); backdrop-filter:blur(12px);
  }
  .tim-chat header{display:flex; align-items:center; gap:8px; padding:10px 12px; background:#0f1116; border-bottom:1px solid var(--line)}
  .tim-chat header b{color:#ffd54d}
  .tim-chat .body{padding:12px; max-height:40vh; overflow:auto; font-size:15px}
  .tim-chat textarea{width:100%; min-height:70px; resize:vertical; background:#0c0e12; color:var(--text); border:1px solid rgba(255,255,255,.08); border-radius:10px; padding:10px}
  .tim-chat .row{display:flex; gap:8px; padding:12px; border-top:1px solid var(--line)}
  .btn{padding:10px 14px; border-radius:10px; border:1px solid rgba(229,200,107,.35); background:linear-gradient(180deg,#171a22,#0d1016); color:#ffd54d; font-weight:700; cursor:pointer}

  #google_translate_element{position:absolute; left:-9999px}
  footer.goc-foot{color:#aaa; text-align:center; padding:24px 12px; border-top:1px solid rgba(255,255,255,.06); margin-top:36px}
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // ===== HERO (auto inject top of body) =====
  function injectHero() {
    if (document.querySelector('.goc-hero')) return; // tránh trùng lặp
    const hero = document.createElement('section');
    hero.className = 'goc-hero';
    hero.innerHTML = `
      <div>
        <img class="logo" src="${LOGO}" alt="LICENSE GỐC™ Logo" onerror="this.style.display='none'">
        <div class="brand">${BRAND}</div>
        <div class="tagline">${TAGL}</div>
      </div>`;
    document.body.prepend(hero);
  }

  // ===== FLOAT BAR =====
  function injectFloatBar() {
    if (document.querySelector('.apps-nav')) return;
    const nav = document.createElement('nav');
    nav.className = 'apps-nav';
    nav.setAttribute('role', 'navigation');
    nav.innerHTML = `
      <a href="index.html">Apps</a>
      <a href="licensenetwork.html">LICENSENETWORK</a>
      <a href="licensecoin.html">LICENSECOIN</a>
      <a href="vault.html">Vault</a>
      <a href="submit.html">SUBMIT</a>
      <a href="payments.html">Pay & Cards</a>
      <a href="logout.html">Log out</a>
      <a href="#!" id="openTim">AI TIM ❤️</a>
      <span class="lang-pill">🌐
        <select id="langPick" aria-label="Select language"></select>
      </span>
    `;
    document.body.appendChild(nav);
  }

  // ===== AI Tim (demo router) =====
  function injectTim() {
    if (document.getElementById('timFab')) return;
    const fab = document.createElement('button');
    fab.className = 'tim-fab'; fab.id = 'timFab';
    fab.innerHTML = `<img src="assets/ai-tim.png" alt="AI Tim" onerror="this.remove();this.insertAdjacentHTML('afterend','<span style=&quot;font-size:28px&quot;>❤️</span>')">`;
    const chat = document.createElement('div');
    chat.className = 'tim-chat'; chat.id = 'timChat';
    chat.innerHTML = `
      <header>
        <b>AI Tim</b><span style="opacity:.7"> — your creative assistant</span>
        <div style="margin-left:auto"><button class="btn" id="closeTim">Close</button></div>
      </header>
      <div class="body" id="timBody">Hello 👋 — Type your question; Tim will route you to the right app.</div>
      <div class="row">
        <textarea id="timInput" placeholder="e.g. open coin / network / vault / submit / pay…"></textarea>
        <button class="btn" id="timSend">Send</button>
      </div>`;
    document.body.appendChild(fab);
    document.body.appendChild(chat);

    const openTim = document.getElementById('openTim');
    const closeBtn = document.getElementById('closeTim');
    const sendBtn  = document.getElementById('timSend');
    const input    = document.getElementById('timInput');
    const body     = document.getElementById('timBody');

    const toggle = (show)=>{ chat.style.display = show ? 'flex' : 'none'; };
    fab.onclick = ()=>toggle(true);
    if (openTim) openTim.onclick = (e)=>{e.preventDefault(); toggle(true);}
    closeBtn.onclick = ()=>toggle(false);

    const routes = [
      ['coin','licensecoin.html'], ['network','licensenetwork.html'], ['vault','vault.html'],
      ['submit','submit.html'], ['pay','payments.html'], ['apps','index.html'], ['logout','logout.html']
    ];
    sendBtn.onclick = ()=>{
      const q = (input.value||'').toLowerCase().trim();
      if(!q) return;
      body.insertAdjacentHTML('beforeend', `<div style="margin-top:8px;opacity:.8">You: ${q}</div>`);
      const hit = routes.find(([k]) => q.includes(k));
      setTimeout(()=> {
        if(hit){ window.location.href = hit[1]; }
        else { body.insertAdjacentHTML('beforeend', `<div style="margin-top:6px">Tim: Try: apps, coin, network, vault, submit, pay, logout…</div>`); }
      }, 120);
    };
  }

  // ===== Translate (Google) =====
  const LANGS = [
    'af','am','ar','az','be','bg','bn','bs','ca','ceb','co','cs','cy','da','de','el','en','eo','es','et','eu','fa','fi','fr','fy','ga','gd','gl','gu',
    'ha','haw','he','hi','hmn','hr','ht','hu','hy','id','ig','is','it','ja','jv','ka','kk','km','kn','ko','ku','ky','la','lb','lo','lt','lv','mg','mi',
    'mk','ml','mn','mr','ms','mt','my','ne','nl','no','ny','or','pa','pl','ps','pt','ro','ru','sd','si','sk','sl','sm','sn','so','sq','sr','st','su',
    'sv','sw','ta','te','tg','th','tk','tl','tr','uk','ur','uz','vi','xh','yi','yo','zh-CN','zh-TW','zu'
  ];
  function setCookie(n,v,days){ const d=new Date(); d.setTime(d.getTime()+days*864e5); document.cookie=`${n}=${v};expires=${d.toUTCString()};path=/`; }
  function getCookie(n){ return (document.cookie.split('; ').find(r=>r.startsWith(n+'='))||'').split('=')[1]; }

  function buildLangSelect() {
    const sel = document.getElementById('langPick');
    if(!sel) return;
    const human = {'en':'English','vi':'Tiếng Việt','fr':'Français','de':'Deutsch','es':'Español','zh-CN':'中文(简)','zh-TW':'中文(繁)','ja':'日本語','ko':'한국어','ar':'العربية','ru':'Русский','pt':'Português'};
    LANGS.forEach(code=>{
      const opt = document.createElement('option');
      opt.value = "auto|"+code;
      opt.textContent = human[code] || code;
      sel.appendChild(opt);
    });
    const saved = getCookie('goc_lang'); if(saved){ sel.value = saved; }
    sel.addEventListener('change', e=>{
      const val = e.target.value; setCookie('goc_lang', val, 365); doGTranslate(val);
    });
  }
  function ensureGTarget(){
    if(!document.getElementById('google_translate_element')){
      const d = document.createElement('div'); d.id = 'google_translate_element'; d.style.position='absolute'; d.style.left='-9999px';
      document.body.appendChild(d);
    }
  }
  function doGTranslate(val){
    if(!val) return;
    const lang = val.split('|')[1];
    const combo = document.querySelector('select.goog-te-combo');
    if(!combo){ setTimeout(()=>doGTranslate(val), 500); return; }
    combo.value = lang; combo.dispatchEvent(new Event('change'));
  }
  window.googleTranslateElementInit = function() {
    /* global google */
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      includedLanguages: LANGS.join(','),
      autoDisplay: false
    }, 'google_translate_element');
    const saved = getCookie('goc_lang');
    if(saved) setTimeout(()=>doGTranslate(saved), 800);
  };
  function loadGoogleScript(){
    if(document.getElementById('gtranslate-lib')) return;
    const s = document.createElement('script');
    s.id = 'gtranslate-lib';
    s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.head.appendChild(s);
  }

  function renderFoot(){
    if (document.querySelector('footer.goc-foot')) return;
    const f = document.createElement('footer');
    f.className = 'goc-foot';
    f.innerHTML = '© 2025 LICENSE GỐC™ — The Root. Eternal. Universal.';
    document.body.appendChild(f);
  }

  // ===== Boot =====
  document.addEventListener('DOMContentLoaded', () => {
    injectHero();
    injectFloatBar();
    injectTim();
    ensureGTarget();
    buildLangSelect();
    loadGoogleScript();
    renderFoot();
  });
})();
