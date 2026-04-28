function goChecklist(){ window.location.href = "system-checklist.html"; }
function goInvestor(){ window.location.href = "investor-snapshot.html"; }
function goExport(){location.href="export-project.html";}
function goRoom(){ window.location.href = "creationsroom.html"; }
function goHub(){ window.location.href = "project-hub.html"; }
function goAI(){ window.location.href = "ai-command.html"; }
function goOwnership(){ window.location.href = "ownership.html"; }
function goUSPTO(){ window.location.href = "uspto.html"; }
function goCoin(){ window.location.href = "licensecoin-engine.html"; }
function goGlobal(){ window.location.href = "globalroom.html"; }
function goDashboard(){ window.location.href = "dashboard.html"; }
document.addEventListener("DOMContentLoaded", function(){
  const nav = document.createElement("div");
  nav.className = "nav-bar";
  nav.innerHTML = `
    <button onclick="goChecklist()">✅ Check</button>
    <button onclick="goInvestor()">💼 Investor</button>
    <button onclick="goExport()">📤 Export</button>
    <button onclick="goDashboard()">📊 Dash</button>
    <button onclick="goRoom()">🧩 Room</button>
    <button onclick="goHub()">🧠 Hub</button>
    <button onclick="goAI()">🤖 AI</button>
    <button onclick="goOwnership()">📜 Owner</button>
    <button onclick="goUSPTO()">⚖️ USPTO</button>
    <button onclick="goCoin()">🪙 Coin</button>
    <button onclick="goGlobal()">🌍 Global</button>
  `;
  document.body.appendChild(nav);

  const style = document.createElement("style");
  style.innerHTML = `
    body{ padding-bottom:70px; }

    .nav-bar{
      position:fixed;
      bottom:0;
      left:0;
      right:0;
      display:grid;
      grid-template-columns:repeat(11,1fr);
      background:#020814;
      border-top:1px solid rgba(255,255,255,.1);
      z-index:9999;
    }

    .nav-bar button{
      padding:10px 4px;
      font-size:11px;
      background:none;
      border:none;
      color:#fff;
      font-weight:900;
      cursor:pointer;
    }

    .nav-bar button:hover{
      background:rgba(255,255,255,.08);
    }
  `;
  document.head.appendChild(style);
});
