/* goc-auth.js — demo client-side auth + welcome/goodbye UX
   - Lưu trạng thái đăng nhập trong localStorage (DEMO)
   - Mở modal login, phát video chào mừng 15s khi login thành công
   - Hiển thị “My Account / Log out” khi đã đăng nhập
   - Lời chào tạm biệt khi logout
   - Dễ nâng cấp về backend thật sau này
*/

(function () {
  const LS_KEY = 'goc_auth_user';   // demo: lưu user JSON
  const WELCOME_DURATION = 15000;   // 15s
  const WELCOME_VIDEO = 'assets/welcome.mp4'; // đặt file video vào /assets/

  // DOM hooks (có thể thiếu ở 1 số trang => kiểm tra tồn tại)
  const loginLink = document.getElementById('loginLink');
  const logoutLink = document.getElementById('logoutLink');
  const myAccountLink = document.getElementById('myAccountLink');

  const modal = document.getElementById('gocLoginModal');
  const email = document.getElementById('gocEmail');
  const pass  = document.getElementById('gocPassword');
  const btnLogin = document.getElementById('gocLoginBtn');
  const btnClose = document.getElementById('gocLoginClose');
  const msg = document.getElementById('gocLoginMsg');

  const welcome = document.getElementById('gocWelcome');
  const welcomeVideo = document.getElementById('gocWelcomeVideo');
  const goodbye = document.getElementById('gocGoodbye');

  function isLoggedIn() {
    try { return !!JSON.parse(localStorage.getItem(LS_KEY)); }
    catch(e){ return false; }
  }
  function getUser() {
    try { return JSON.parse(localStorage.getItem(LS_KEY)); }
    catch(e){ return null; }
  }
  function setUser(u){ localStorage.setItem(LS_KEY, JSON.stringify(u)); }
  function clearUser(){ localStorage.removeItem(LS_KEY); }

  // Toggle nav based on auth state
  function refreshNav() {
    const logged = isLoggedIn();
    if (loginLink)  loginLink.style.display  = logged ? 'none' : '';
    if (logoutLink) logoutLink.style.display = logged ? '' : 'none';
    if (myAccountLink) myAccountLink.style.display = logged ? '' : 'none';
  }

  // Modal handlers
  function openLogin(){ if(modal) modal.style.display = 'block'; msg && (msg.textContent=''); }
  function closeLogin(){ if(modal) modal.style.display = 'none'; }
  function playWelcomeVideo() {
    if (!welcome || !welcomeVideo) return;
    welcome.style.display = 'block';
    // gán src mỗi lần mở
    welcomeVideo.src = WELCOME_VIDEO;
    welcomeVideo.currentTime = 0;
    welcomeVideo.play().catch(()=>{ /* autoplay blocked → vẫn hiển overlay  */ });

    setTimeout(()=>{
      welcome.style.display = 'none';
      welcomeVideo.pause();
      welcomeVideo.removeAttribute('src'); // giải phóng
    }, WELCOME_DURATION);
  }
  function showGoodbye() {
    if(!goodbye) return;
    goodbye.style.display = 'block';
    setTimeout(()=> goodbye.style.display='none', 2500);
  }

  // Wire up links
  if (loginLink) {
    loginLink.addEventListener('click', (e)=>{
      e.preventDefault();
      openLogin();
    });
  }
  if (logoutLink) {
    logoutLink.addEventListener('click', (e)=>{
      e.preventDefault();
      clearUser();
      refreshNav();
      showGoodbye();
      // Optional: điều hướng về trang chủ
      setTimeout(()=>{ window.location.href = 'index.html'; }, 900);
    });
  }

  // Login demo
  if (btnLogin) {
    btnLogin.addEventListener('click', ()=>{
      const em = (email && email.value || '').trim();
      const pw = (pass && pass.value || '').trim();
      if (!em || !pw) { msg && (msg.textContent = 'Please enter email & password.'); return; }
      // DEMO: chấp nhận mọi email/password. Nâng cấp: gọi API thực.
      const user = { email: em, name: em.split('@')[0], ts: Date.now() };
      setUser(user);
      refreshNav();
      closeLogin();
      // phát video chào mừng 
      playWelcomeVideo();
      // Optional: chuyển vào Apps sau 1-2s (để video phát 15s trên overlay chung)
      // setTimeout(()=> window.location.href='index.html', 1200);
    });
  }
  if (btnClose) btnClose.addEventListener('click', closeLogin);

  // Init on load
  document.addEventListener('DOMContentLoaded', refreshNav);
})();
