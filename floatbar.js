document.body.insertAdjacentHTML("beforeend",`

<div class="float-toggle" onclick="openFloatBar()">
✦
</div>

<div class="float-panel" id="floatPanel">

<button class="float-close" onclick="closeFloatBar()">✕</button>

<div class="float-grid">

<a class="float-card" href="index.html">
<span>🏠</span>
HOME
</a>

<a class="float-card" href="creationsroom.html">
<span>🧩</span>
CREATIONS ROOM
</a>

<a class="float-card" href="licensecoin-engine.html">
<span>🪙</span>
LICENSECOIN
</a>

<a class="float-card" href="commercial.html">
<span>💼</span>
COMMERCIAL
</a>

<a class="float-card" href="entertainment.html">
<span>🎬</span>
ENTERTAINMENT
</a>

<a class="float-card" href="ownership.html">
<span>📜</span>
OWNERSHIP
</a>

<a class="float-card" href="uspto.html">
<span>⚖️</span>
USPTO
</a>

<a class="float-card" href="global-room.html">
<span>🌍</span>
GLOBAL ROOM
</a>

<a class="float-card" href="aitim.html">
<span>🤖</span>
AI TIM
</a>

<a class="float-card" href="system-map.html">
<span>❤️</span>
SYSTEM MAP
</a>

</div>

<div class="float-login">

<button class="login-btn">
LOGIN / MEMBERSHIP
</button>

<button class="logout-btn">
LOG OUT
</button>

</div>

</div>

`);

function openFloatBar(){
document.getElementById("floatPanel").classList.add("show");
}

function closeFloatBar(){
document.getElementById("floatPanel").classList.remove("show");
}
