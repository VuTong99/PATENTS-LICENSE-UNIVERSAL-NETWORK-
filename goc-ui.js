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
/* ===== GLOBAL TRANSLATE BUTTON ===== */
(function(){
  if(window.__gocTranslateInit) return; 
  window.__gocTranslateInit = true;

  // CSS cho nút nổi
  const css = `
    #goc-translate-btn{
      position:fixed; right:14px; bottom:82px; z-index:9999;
      padding:10px 14px; font-weight:700; font-size:13px;
      border-radius:14px; border:1px solid rgba(245,211,106,.35);
      background:linear-gradient(135deg,#ffd66b,#49b3ff);
      color:#001428; box-shadow:0 6px 20px rgba(73,179,255,.35);
      animation:blink 1.8s infinite;
    }
    @keyframes blink {
      0%,100%{opacity:1} 50%{opacity:.55}
    }
    #google_translate_element{
      position:fixed; right:14px; bottom:130px; z-index:9999;
      background:rgba(15,29,49,.95); border:1px solid rgba(120,170,255,.35);
      border-radius:12px; padding:8px 10px; display:none;
    }
  `;
  const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

  // Tạo nút và khay translate
  const btn=document.createElement('button');
  btn.id='goc-translate-btn'; btn.textContent='🌐 Translate';
  const tray=document.createElement('div'); tray.id='google_translate_element';
  document.body.appendChild(btn); document.body.appendChild(tray);

  btn.addEventListener('click',()=>{
    tray.style.display = tray.style.display==='none'?'block':'none';
  });

  // Google Translate init
  window.googleTranslateElementInit=function(){
    new google.translate.TranslateElement({
      pageLanguage:'auto',
      includedLanguages:'',
      autoDisplay:false
    },'google_translate_element');
  };

  // Load script Google 1 lần
  const s=document.createElement('script');
  s.src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.head.appendChild(s);
  // === FLOAT BAR (thanh menu nổi, thêm Creationsroom) ===
const onReady = (fn) => (
  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', fn, { once: true })
    : fn()
);

onReady(() => {
  if (document.querySelector('.apps-nav')) return; // tránh tạo trùng

  const nav = document.createElement('nav');
  nav.className = 'apps-nav';
  nav.innerHTML = `
    <a href="index.html">Home</a>
    <a href="licensenetwork.html">LICENSENETWORK</a>
    <a href="creationsroom.html">CREATIONSROOM</a>
    <a href="vault.html">Vault</a>
  `;
  document.body.appendChild(nav);
});
})();
