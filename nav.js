// =========================
// NAVIGATION FUNCTIONS
// =========================
function goRoom(){ window.location.href="creationsroom.html"; }
function goHub(){ window.location.href="project-hub.html"; }
function goAI(){ window.location.href="ai-command.html"; }
function goOwnership(){ window.location.href="ownership.html"; }
function goUSPTO(){ window.location.href="uspto.html"; }
function goCoin(){ window.location.href="licensecoin-engine.html"; }
function goGlobal(){ window.location.href="globalroom.html"; }
function goDashboard(){ window.location.href="dashboard.html"; }
function goExport(){ window.location.href="export-project.html"; }
function goInvestor(){ window.location.href="investor-snapshot.html"; }
function goChecklist(){ window.location.href="system-checklist.html"; }

// =========================
// CREATE NAV BAR
// =========================
document.addEventListener("DOMContentLoaded", function(){

  const nav = document.createElement("div");
  nav.className = "nav-bar";

  nav.innerHTML = `
    <button onclick="goChecklist()">✅<br>Check</button>
    <button onclick="goInvestor()">💼<br>Investor</button>
    <button onclick="goExport()">📤<br>Export</button>
    <button onclick="goDashboard()">📊<br>Dash</button>
    <button onclick="goRoom()">🧩<br>Room</button>
    <button onclick="goHub()">🧠<br>Hub</button>
    <button onclick="goAI()">🤖<br>AI</button>
    <button onclick="goOwnership()">📜<br>Owner</button>
    <button onclick="goUSPTO()">⚖️<br>USPTO</button>
    <button onclick="goCoin()">🪙<br>Coin</button>
    <button onclick="goGlobal()">🌍<br>Global</button>
  `;

  document.body.appendChild(nav);

});
