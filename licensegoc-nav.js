(function(){
if(window.LICENSEGOC_NAV) return;
window.LICENSEGOC_NAV=true;

document.body.insertAdjacentHTML("beforeend",`
<div class="lgc-dock">
<a href="index.html">⌂<span>HOME</span></a>
<a href="creationsroom.html">🧩<span>BUILD</span></a>
<a href="ai-command.html">🤖<span>AI</span></a>
<a href="globalroom.html">🌍<span>NETWORK</span></a>
<button onclick="openLgcMenu()">☰<span>MORE</span></button>
</div>

<div id="lgcMenu" class="lgc-menu">
<button class="lgc-close" onclick="closeLgcMenu()">×</button>
<a href="system-map.html">❤️ SYSTEM MAP</a>
<a href="commercial.html">💼 COMMERCIAL</a>
<a href="ownership.html">📜 OWNERSHIP</a>
<a href="uspto.html">⚖️ USPTO</a>
<a href="licensecoin.html">🪙 LICENSECOIN</a>
<a href="licensenetwork.html">🌐 LICENSENETWORK</a>
<a href="entertainment.html">🎬 ENTERTAINMENT</a>
<a href="dashboard.html">📊 DASHBOARD</a>
<a href="login.html">🔐 LOGIN</a>
</div>
`);

const style=document.createElement("style");
style.innerHTML=`
.lgc-dock{
position:fixed;left:50%;bottom:14px;transform:translateX(-50%);
width:min(760px,94%);height:76px;z-index:9999;
display:grid;grid-template-columns:repeat(5,1fr);gap:8px;
padding:10px;border-radius:30px;background:rgba(5,10,18,.9);
border:1px solid rgba(241,199,107,.18);backdrop-filter:blur(18px)
}
.lgc-dock a,.lgc-dock button{
border:0;background:transparent;color:#f8dfaa;text-decoration:none;
font-weight:900;font-size:22px;display:flex;flex-direction:column;
align-items:center;justify-content:center
}
.lgc-dock span{font-size:10px;margin-top:3px}
.lgc-menu{
position:fixed;inset:0;z-index:99999;display:none;padding:80px 22px;
background:rgba(0,0,0,.9);backdrop-filter:blur(18px)
}
.lgc-menu.show{display:grid;gap:14px;align-content:start}
.lgc-menu a{
min-height:58px;border-radius:18px;padding:18px;text-decoration:none;
background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);
color:white;font-weight:1000
}
.lgc-close{
position:fixed;right:22px;top:28px;width:54px;height:54px;border-radius:18px;
border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.08);
color:white;font-size:28px
}`;
document.head.appendChild(style);
})();

function openLgcMenu(){document.getElementById("lgcMenu").classList.add("show")}
function closeLgcMenu(){document.getElementById("lgcMenu").classList.remove("show")}
