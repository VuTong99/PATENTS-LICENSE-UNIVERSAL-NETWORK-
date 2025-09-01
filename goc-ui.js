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
document.head.appendChild(style);
}
`;
document.head.appendChild(style);
  document.head.appendChild(style);

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
    </a>
    <span 
      class="lang-pill">🌐
      <select id="langPick" aria-label="Select language">
        <option value="auto|en">English</option>
        <option value="auto|vi" selected>Tiếng Việt</option>
        <option value="auto|fr">Français</option>
        <option value="auto|de">Deutsch</option>
        <option value="auto|es">Español</option>
        <option value="auto|pt">Português</option>
        <option value="auto|it">Italiano</option>
        <option value="auto|ru">Русский</option>
        <option value="auto|ja">日本語</option>
        <option value="auto|ko">한국어</option>
        <option value="auto|zh-CN">中文(简)</option>
        <option value="auto|ar">العربية</option>
        <option value="auto|hi">हिन्दी</option>
      </select>
    </span>`;
  document.body.appendChild(nav);

  // ==== Google Translate (giữ ngôn ngữ theo cookie) ====
  function setCookie(n,v,d){const t=new Date;t.setTime(t.getTime()+d*864e5);document.cookie=`${n}=${v};expires=${t.toUTCString()};path=/`}
  function getCookie(n){return (`; ${document.cookie}`).split(`; ${n}=`).pop().split(';')[0]||''}
  const langPick = nav.querySelector('#langPick');
  function doGTranslate(val){
    if(!val) return;
    const [from,to] = val.split('|');
    setCookie('googtrans',`/${from}/${to}`,365); // cookie của Google Translate
    setCookie('goc_lang',val,365);                // cookie của mình
    location.reload();
  }
  if(langPick){
    langPick.addEventListener('change',e=>doGTranslate(e.target.value));
    const saved = getCookie('goc_lang'); if(saved) langPick.value = saved;
  }
  // element bắt buộc cho Google
  const gtDiv = document.createElement('div'); gtDiv.id = 'google_translate_element'; document.body.appendChild(gtDiv);
  window.googleTranslateElementInit = function(){
    new google.translate.TranslateElement({
      pageLanguage: 'en',
      autoDisplay: false
    }, 'google_translate_element');
  };
  const s = document.createElement('script');
  s.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.head.appendChild(s);

  // ==== (tuỳ chọn) mở AI Tim sau này ====
  const openTim = document.getElementById('openTim');
  if(openTim){ openTim.addEventListener('click', e => { e.preventDefault(); alert('AI Tim coming soon ✨'); }); }
})();

// ==== Inject "Commercial" button into Floating Bar (avoid duplicates) ====
(function () {
  // Tìm thanh bar (tùy trang có id/class khác nhau)
  const bar =
    document.querySelector('#floatingBar') ||
    document.querySelector('.floating-bar') ||
    document.querySelector('[data-floating-bar]');

  if (!bar) return; // không có bar thì thôi

  // Tránh tạo trùng
  if (bar.querySelector('[data-nav="commercial"]')) return;

  // Tạo nút
  const a = document.createElement('a');
  a.href = 'commercial.html';
  a.target = '_self';
  a.className = 'btn pill'; // dùng class nút hiện có của bạn
  a.dataset.nav = 'commercial';
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
})();
})();
