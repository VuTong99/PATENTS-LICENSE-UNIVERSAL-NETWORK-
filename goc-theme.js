(function(){
  if(document.getElementById('gocThemeBar')) return;

  // Tạo CSS riêng cho Theme Bar
  const css = document.createElement('style');
  css.textContent = `
    #gocThemeBar {
      position:fixed;top:12px;right:12px;z-index:9999;
      display:flex;gap:6px;padding:6px 10px;
      border-radius:12px;
      background:rgba(0,0,0,0.6);
      backdrop-filter:blur(10px);
      border:1px solid rgba(255,255,255,.15);
      font-family:system-ui,Arial,sans-serif;
    }
    #gocThemeBar button{
      padding:6px 10px;border:0;border-radius:8px;
      font-weight:700;font-size:13px;cursor:pointer;
      background:#222;color:#eee;
    }
    #gocThemeBar button:hover{background:#444}
    #gocThemeBar input[type=color]{
      width:30px;height:30px;border:0;cursor:pointer;
      background:none;padding:0;
    }
  `;
  document.head.appendChild(css);

  // Tạo thanh chọn theme
  const bar = document.createElement('div');
  bar.id = 'gocThemeBar';
  bar.innerHTML = `
    <button data-t="dark">Dark</button>
    <button data-t="light">Light</button>
    <button data-t="color">Colors</button>
    <input id="gocThemeColor" type="color"/>
  `;
  document.body.prepend(bar);

  // Lưu theme vào localStorage
  function setTheme(mode){
    if(mode==="dark"){
      document.documentElement.style.background="#0a0b0f";
      document.documentElement.style.color="#eee";
      localStorage.setItem("gocTheme","dark");
    }else if(mode==="light"){
      document.documentElement.style.background="#fff";
      document.documentElement.style.color="#111";
      localStorage.setItem("gocTheme","light");
    }else if(mode==="color"){
      const c = document.getElementById("gocThemeColor").value || "#49b3ff";
      document.documentElement.style.background=c;
      document.documentElement.style.color="#fff";
      localStorage.setItem("gocTheme","color:"+c);
    }
  }

  // Event: click các nút
  bar.querySelectorAll("[data-t]").forEach(btn=>{
    btn.addEventListener("click",()=> setTheme(btn.getAttribute("data-t")));
  });
  bar.querySelector("#gocThemeColor").addEventListener("input",()=> setTheme("color"));

  // Khôi phục theme đã lưu
  const saved = localStorage.getItem("gocTheme");
  if(saved){
    if(saved.startsWith("color:")){
      const c = saved.split(":")[1];
      document.getElementById("gocThemeColor").value=c;
      document.documentElement.style.background=c;
      document.documentElement.style.color="#fff";
    }else{
      setTheme(saved);
    }
  }
})();
