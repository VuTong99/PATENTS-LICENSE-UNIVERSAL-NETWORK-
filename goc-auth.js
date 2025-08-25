/* LICENSE GỐC™ — Auth: Login/Logout + Welcome/Goodbye
   - Lưu user tại localStorage key: 'goc:user'
   - Hàm toàn cục:
       window.gocOpenLogin()  // mở modal đăng nhập
       window.gocLogout()     // đăng xuất + hiện Goodbye
       window.gocGetUser()    // lấy user hiện tại (hoặc null)
       window.gocIsSignedIn() // boolean
   - Sự kiện:
       document.dispatchEvent(new CustomEvent('goc:auth-changed',{detail:{user}}));
*/
(function () {
  const LS_KEY = 'goc:user';

  // ========= helpers =========
  function getUser() {
    try { return JSON.parse(localStorage.getItem(LS_KEY)); }
    catch (e) { return null; }
  }
  function setUser(u) {
    localStorage.setItem(LS_KEY, JSON.stringify(u));
  }
  function clearUser() {
    localStorage.removeItem(LS_KEY);
  }
  function isSignedIn(){ return !!getUser(); }

  // ======== expose globals ========
  window.gocGetUser = getUser;
  window.gocIsSignedIn = isSignedIn;

  // ========= UI builders =========
  function ensureStyles(){
    if(document.getElementById('goc-auth-styles')) return;
    const css = `
    .goc-overlay{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;
      background:rgba(0,0,0,.6);backdrop-filter:blur(6px);z-index:9999}
    .goc-card{width:min(520px,92vw);border-radius:16px;padding:20px;background:#0f1117;
      color:#eae7dc;border:1px solid rgba(255,255,255,.08);box-shadow:0 20px 60px rgba(0,0,0,.45)}
    .goc-title{font-weight:800;font-size:22px;margin:0 0 8px}
    .goc-sub{opacity:.75;margin:0 0 14px;font-size:14px}
    .goc-row{display:flex;gap:10px;margin:10px 0}
    .goc-row>*{flex:1}
    .goc-inp{width:100%;padding:12px 14px;border-radius:10px;background:#0b0d12;color:#eae7dc;
      border:1px solid rgba(255,255,255,.12);outline:none}
    .goc-inp::placeholder{color:#9aa4b2}
    .goc-actions{display:flex;gap:10px;justify-content:flex-end;margin-top:4px}
    .goc-btn{padding:10px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.14);background:#111827;
      color:#eae7dc;cursor:pointer}
    .goc-btn.primary{background:linear-gradient(180deg,#171a22,#0c0f14);border-color:#ffd54d;color:#ffd54d;
      box-shadow:inset 0 0 0 1px rgba(255,213,77,.35)}
    .goc-pulse{animation:goc-pulse 1.2s ease-out 1}
    @keyframes goc-pulse {0%{transform:scale(.97);opacity:.0} 100%{transform:scale(1);opacity:1}}
    .goc-toast{position:fixed;inset:auto 0 32px 0;margin:auto; width:min(560px,92vw);
      background:#10141b;border:1px solid rgba(255,255,255,.08);color:#eae7dc;border-radius:14px;
      padding:18px 16px;text-align:center;z-index:9999;box-shadow:0 18px 60px rgba(0,0,0,.45)}
    `;
    const style = document.createElement('style');
    style.id = 'goc-auth-styles';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function buildLoginModal(){
    ensureStyles();
    // Nếu trang đã có sẵn <div id="gocLoginModal"> do bạn thêm tay, dùng lại luôn
    let host = document.getElementById('gocLoginModal');
    if(!host){
      host = document.createElement('div');
      host.id = 'gocLoginModal';
      document.body.appendChild(host);
    }
    host.innerHTML = `
      <div class="goc-overlay" style="display:none">
        <div class="goc-card goc-pulse" role="dialog" aria-modal="true">
          <h3 class="goc-title">Sign in • LICENSE GỐC™</h3>
          <p class="goc-sub">Nhập tên & email (dùng làm ID). Dùng tạm ở thiết bị này.</p>
          <div class="goc-row">
            <input id="gocLoginName" class="goc-inp" placeholder="Your name">
            <input id="gocLoginEmail" class="goc-inp" placeholder="Email (ID)">
          </div>
          <div class="goc-actions">
            <button class="goc-btn" id="gocLoginCancel">Cancel</button>
            <button class="goc-btn primary" id="gocLoginSubmit">Sign in</button>
          </div>
        </div>
      </div>
    `;
    const overlay = host.querySelector('.goc-overlay');
    function open(){
      overlay.style.display = 'flex';
      setTimeout(()=>host.querySelector('#gocLoginName')?.focus(), 50);
      // autofill nếu có sẵn input name/email trên trang Submit/Vault
      const n = document.querySelector('#name,#vaultName,#submitName');
      const e = document.querySelector('#email,#vaultEmail,#submitEmail');
      if(n && !host.querySelector('#gocLoginName').value) host.querySelector('#gocLoginName').value = n.value || '';
      if(e && !host.querySelector('#gocLoginEmail').value) host.querySelector('#gocLoginEmail').value = e.value || '';
    }
    function close(){ overlay.style.display = 'none'; }

    host.querySelector('#gocLoginCancel').onclick = close;
    host.querySelector('#gocLoginSubmit').onclick = () => {
      const name  = host.querySelector('#gocLoginName').value.trim();
      const email = host.querySelector('#gocLoginEmail').value.trim().toLowerCase();
      if(!name || !email || !email.includes('@')){
        alert('Vui lòng nhập TÊN và EMAIL hợp lệ.'); return;
      }
      const user = { id: email, name, email, ts: Date.now() };
      setUser(user);
      document.dispatchEvent(new CustomEvent('goc:auth-changed', { detail: { user } }));
      close();
      showWelcome(user);
      // fill ngược lại nếu có input trên trang
      const n = document.querySelector('#name,#vaultName,#submitName');
      const e = document.querySelector('#email,#vaultEmail,#submitEmail');
      if(n) n.value = name;
      if(e) e.value = email;
    };

    // đóng bằng ESC
    document.addEventListener('keydown', (ev)=>{
      if(ev.key === 'Escape' && overlay.style.display !== 'none') close();
    });

    return { open, close };
  }

  function ensureToastHost(id){
    ensureStyles();
    let el = document.getElementById(id);
    if(!el){
      el = document.createElement('div');
      el.id = id;
      document.body.appendChild(el);
    }
    return el;
  }

  function showWelcome(user){
    const host = ensureToastHost('gocWelcome');
    host.innerHTML = `<div class="goc-toast goc-pulse">Welcome, <b>${user.name}</b>! Have a great time in LICENSE GỐC™.</div>`;
    host.style.display = 'block';
    setTimeout(()=> host.style.display = 'none', 2500);
  }

  function showGoodbye(){
    const host = ensureToastHost('gocGoodbye');
    host.innerHTML = `<div class="goc-toast goc-pulse">You are signed out. See you again! ❤️</div>`;
    host.style.display = 'block';
    setTimeout(()=> host.style.display = 'none', 2200);
  }

  // ====== public actions ======
  const modal = buildLoginModal();
  window.gocOpenLogin = () => modal.open();
  window.gocLogout = () => {
    const wasIn = isSignedIn();
    clearUser();
    document.dispatchEvent(new CustomEvent('goc:auth-changed', { detail: { user: null } }));
    if(wasIn) showGoodbye();
  };

  // ====== first paint: nếu đã signed-in, bơm dữ liệu vào form trang hiện tại ======
  (function hydrateInputsFromUser(){
    const u = getUser();
    if(!u) return;
    const n = document.querySelector('#name,#vaultName,#submitName');
    const e = document.querySelector('#email,#vaultEmail,#submitEmail');
    if(n && !n.value) n.value = u.name;
    if(e && !e.value) e.value = u.email;
  })();

})();
