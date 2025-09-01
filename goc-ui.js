/* ===== LICENSE GỐC™ Global UI (logo + float bar + translate) ===== */
(function () {
  // ==== CONFIG (đổi tên ảnh logo nếu cần) ====
  const LOGO = 'assets/IMG_6306.png'; // đổi thành file thật trong assets/

  // ==== inject basic styles (float bar, hero, buttons) ====
  const css = `
  :root{--bg:#0a0b0f;--text:#eae7dc;--gold:#f5d36a;--line:rgba(245,211,106,.28)}
  .hero{display:grid;place-items:center;text-align:center;padding:28px 10px 8px}
  .hero .brand{font-weight:800;letter-spacing:.02em;font-size:22px;margin-top:8px}
  .hero .tagline{opacity:.8;font-size:14px}
  .apps-nav{position:sticky;bottom:12px;left:0;right:0;display:flex;flex-wrap:wrap;gap:10px;
    justify-content:center;align-items:center;margin:24px auto 0;padding:10px 12px;
    background:rgba(13,13,15,.55);border:1px solid var(--line);border-radius:12px;
    backdrop-filter:blur(10px);max-width:1100px;z-index:30}
  .apps-nav a,.apps-nav button{font-weight:700;padding:10px 16px;border-radius:999px;color:#ffd54d;
    border:1px solid rgba(255,213,77,.35);background:linear-gradient(180deg,#0f0f12,#0b0b0e);
    box-shadow:inset 0 0 0 1px rgba(255,255,255,.05),0 6px 18px rgba(0,0,0,.35);cursor:pointer}
  .apps-nav a:hover,.apps-nav button:hover{transform:translateY(-2px)}
  .lang-pill{display:flex;gap:8px;align-items:center;padding:6px 10px;border-radius:999px;
    border:1px solid rgba(255,213,77,.28);background:linear-gradient(180deg,#101217,#0b0d12);color:#ffd54d}
  .lang-pill select{background:transparent;border:none;color:#ffd54d;font-weight:700;outline:none}
  #google_translate_element{position:absolute;left:-9999px}
  `;
  // === FLOAT BAR: cho phép kéo ngang khi nhiều nút ===
const style = document.createElement('style');
style.textContent = `
.apps-nav{
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 10px;
}
.apps-nav a{
  flex: 0 0 auto;
  const style = document.createElement('style');
style.textContent = `
.apps-nav {
.apps-nav a {
  padding: 10px 18px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 14px;
  color: #ffe;
  background: linear-gradient(135deg,#0f1d31,#0b1422);
  border: 1px solid rgba(120,170,255,.3);
  text-decoration: none;
}
`;

  document.head.appendChild(style)
  ';
  

// ==== FLOAT BAR (áp dụng cho mọi trang) ====
  const nav = document.createElement('nav');
  nav.className = 'apps-nav';
  nav.innerHTML = `
    
    <a href="licensenetwork.html">LICENSENETWORK</a>
    <a href="licensecoin.html">LICENSECOIN</a>
    <a href="vault.html">Vault</a>
    <a href="submit.html">Submit</a>
    <a href="paycards.html">Pay & Cards</a>
    <a href="commercial.html">🛒 Commercial</a>
    <a href="logout.html">Log out</a>
    <a href="#!" id="openTim">AI TIM ♥️</a>
    <a href="https://www.facebook.com/sharer/sharer.php?u=https://vutong99.github.io/PATENTS-LICENSE-UNIVERSAL-NETWORK" 
   target="_blank">📢 Share FB</a>
    <a href="creationsroom.html"<CREATIONS ROOM</a>
    <span class="lang-pill">🌐
    </.dataset.nav = 'commercial';
  a.innerHTML = '🛍️ <span class="label">Commercial</span>';

  // Gắn vào bar
  bar.appendChild(a);
  /* ===== Global Translate 130+ for all pages ===== */
(function () {
  if (window.__gocTranslateLoaded) return;
  window.__gocTranslateLoaded = true;

  // 1) Hộp Translate (ẩn mặc định)
  const tray = document.createElement('div');
  tray.id = 'google_translate_element';
  tray.style.cssText = [
    'position:fixed','right:12px','bottom:78px','z-index:9999',
    'background:rgba(15,29,49,.95)','border:1px solid rgba(245,211,106,.35)',
    'border-radius:12px','padding:8px 10px','display:none',
    'backdrop-filter:blur(8px)','box-shadow:0 10px 28px rgba(0,0,0,.45)'
  ].join(';');
  document.addEventListener('DOMContentLoaded', ()=> document.body.appendChild(tray));

  // 2) Nút 🌐 trên Floating Bar (nếu có .appbar), nếu không thì tạo 1 nút nhỏ ở góc
  function addTranslateTrigger() {
    const toggle = (e) => { e && e.preventDefault?.(); tray.style.display = (tray.style.display === 'none' || !tray.style.display) ? 'block' : 'none'; };
    const appbar = document.querySelector('.appbar, nav.appbar, nav.apps-nav');
    if (appbar) {
      const a = document.createElement('a');
      a.href = '#';
      a.innerHTML = '🌐 Translate';
      a.style.whiteSpace = 'nowrap';
      a.addEventListener('click', toggle);
      appbar.appendChild(a);
    } else {
      const fab = document.createElement('button');
      fab.type = 'button';
      fab.title = 'Translate';
      fab.textContent = '🌐';
      fab.style.cssText = [
        'position:fixed','right:12px','bottom:18px','z-index:9998',
        'width:44px','height:44px','border-radius:50%','cursor:pointer',
        'border:1px solid rgba(245,211,106,.35)',
        'background:linear-gradient(180deg,#121a2a,#0b1220)'
      ].join(';');
      fab.addEventListener('click', toggle);
      document.addEventListener('DOMContentLoaded', ()=> document.body.appendChild(fab));
    }
  }
  addTranslateTrigger();

  // 3) Hàm setLanguage: ghi cookie + nhớ localStorage (để giữ ngôn ngữ cho toàn site)
  function setLanguage(lang) {
    try {
      localStorage.setItem('goc_lang', lang);
      const host = location.hostname;
      // cookie cần đặt cả với domain có/không dấu chấm tùy môi trường
      document.cookie = `googtrans=/auto/${lang};domain=.${host};path=/`;
      document.cookie = `googtrans=/auto/${lang};path=/`;
      // reload để áp dụng toàn trang
      location.reload();
    } catch(e) {}
  }
  window.gocSetLang = setLanguage; // tiện gọi từ console nếu cần

  // 4) Tự khởi tạo Google Translate (130+ ngôn ngữ — để trống includedLanguages cho full)
  window.googleTranslateElementInit = function() {
    try {
      new google.translate.TranslateElement({
        pageLanguage: 'auto',
        includedLanguages: '', // để trống = full list 100+ ngôn ngữ
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      }, 'google_translate_element');

      // Khôi phục ngôn ngữ đã chọn trước đó
      const saved = localStorage.getItem('goc_lang');
      if (saved) {
        // đợi widget render xong rồi set cookie
        setTimeout(() => {
          document.cookie = `googtrans=/auto/${saved};domain=.${location.hostname};path=/`;
          document.cookie = `googtrans=/auto/${saved};path=/`;
          // không reload ngay để tránh vòng lặp; trang sau sẽ giữ ngôn ngữ
        }, 900);
      }
    } catch (e) {}
  };

  // 5) Tải script Google 1 lần
  const s = document.createElement('script');
  s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.head.appendChild(s);

  // 6) (Tuỳ chọn) Nhóm 5 ngôn ngữ “phổ biến” để chọn nhanh (gọi từ console nếu muốn)
  window.gocQuickLang = function(langCode){
    // ví dụ: gocQuickLang('vi') / gocQuickLang('en') / gocQuickLang('ja')
    setLanguage(langCode);
  };
<script>
/* ===== LICENSE GỐC • Global Translate (130+ languages) ===== */
(function () {
  if (window.__gocTranslateBooted) return;        // tránh nạp 2 lần
  window.__gocTranslateBooted = true;

  /* ---------- CSS nhỏ cho nút & khay ---------- */
  const css = `
  :root{--gtb:rgba(15,29,49,.95);--gtl:rgba(245,211,100,.35)}
  .goc-gt-fab, .goc-gt-link{
    font: 700 12px/1.1 Inter,system-ui,-apple-system,Segoe UI,Roboto,Arial;
    border:1px solid var(--gtl); color:#eaf2ff; user-select:none
  }
  .goc-gt-link{padding:6px 10px;border-radius:999px;background:linear-gradient(180deg,#13263f,#0a1422)}
  .goc-gt-fab{
    position:fixed; right:12px; bottom:86px; z-index:9998;
    width:44px;height:44px;border-radius:12px;
    background:linear-gradient(180deg,var(--gtb),rgba(10,20,34,.98));
    backdrop-filter:blur(8px)
  }
  .goc-gt-fab:focus-visible, .goc-gt-link:focus-visible{outline:2px solid #49b3ff;outline-offset:2px}
  #google_translate_element{
    position:fixed; right:12px; bottom:136px; z-index:9999;
    background:linear-gradient(180deg,var(--gtb),rgba(10,20,34,.98));
    border:1px solid rgba(120,170,255,.28); border-radius:12px;
    padding:8px 10px; box-shadow:0 10px 30px rgba(0,0,0,.35)
  }
  @media (prefers-reduced-motion: reduce){
    .goc-gt-fab, #google_translate_element{animation:none; transition:none}
  }`;
  const st = document.createElement('style');
  st.textContent = css; document.head.appendChild(st);

  /* ---------- Helpers ---------- */
  function setGTcookie(lang) {
    // ví dụ lang = 'vi' / 'en' / 'ja' ...
    const v = `/auto/${lang}`;
    const d = new Date(); d.setTime(d.getTime()+365*24*60*60*1000);
    document.cookie = `googtrans=${v};expires=${d.toUTCString()};path=/`;
    document.cookie = `googtrans=${v};domain=.${location.hostname};expires=${d.toUTCString()};path=/`;
    localStorage.setItem('goc_lang', lang);
  }

  // API public (có thể gọi từ nơi khác: window.gocSetLang('ja'))
  window.gocSetLang = function (lang){
    try { setGTcookie(lang); location.reload(); } catch(e){}
  };

  /* ---------- Tạo khay Translate cho widget ---------- */
  let tray = document.getElementById('google_translate_element');
  if (!tray){
    tray = document.createElement('div');
    tray.id = 'google_translate_element';
    tray.style.display = 'none';
    tray.setAttribute('aria-live','polite');
    document.body.appendChild(tray);
  }

  /* ---------- Nút trên Floating Bar hoặc FAB nổi ---------- */
  function mountTrigger() {
    // ưu tiên chèn vào floating bar nếu có
    const bar = document.querySelector('.apps--nav');
    if (bar && !bar.querySelector('[data-gt]')) {
      const a = document.createElement('a');
      a.href = '#'; a.dataset.gt = '1'; a.className = 'goc-gt-link';
      a.setAttribute('aria-label','Translate this page');
      a.innerHTML = '🌐 Translate';
      a.addEventListener('click', e => { e.preventDefault(); toggleTray(); });
      bar.appendChild(a);
      return;
    }
    // nếu không có bar -> hiện FAB
    if (!document.querySelector('.goc-gt-fab')) {
      const b = document.createElement('button');
      b.type='button'; b.className='goc-gt-fab'; b.title='Translate';
      b.setAttribute('aria-label','Translate this page'); b.textContent='🌐';
      b.addEventListener('click', toggleTray);
      document.body.appendChild(b);
    }
  }

  function toggleTray(){
    tray.style.display = (tray.style.display === 'none') ? 'block' : 'none';
  }

  // Quan sát DOM: nếu bar xuất hiện trễ sẽ tự gắn nút
  const mo = new MutationObserver(() => mountTrigger());
  mo.observe(document.documentElement, {childList:true, subtree:true});
  mountTrigger();  // thử gắn ngay lần đầu

  /* ---------- Google Translate bootstrap ---------- */
  window.googleTranslateElementInit = function (){
    try {
      new google.translate.TranslateElement({
        pageLanguage: 'auto',
        includedLanguages: '',        // rỗng = tất cả
        autoDisplay: false,
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      }, 'google_translate_element');

      // khôi phục ngôn ngữ đã lưu (nếu có)
      const saved = localStorage.getItem('goc_lang');
      if (saved){
        setTimeout(() => setGTcookie(saved), 300);
      }
    } catch(e){}
  };

  // Nạp script Google 1 lần
  (function loadGT(){
    if (window.__gocGTLoaded) return;
    const s = document.createElement('script');
    s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    s.async = true; s.onerror = () => console.warn('Translate load failed');
    document.head.appendChild(s);
    window.__gocGTLoaded = true;
  })();


