// LICENSEGOC™ AUTH SYSTEM v1

function gocGetUser(){
  return JSON.parse(localStorage.getItem("licensegoc_user") || "null");
}

function gocLogin(name,email,role){
  const user = {
    name:name || "GỐC CREATOR",
    email:email || "",
    role:role || "CREATOR",
    id:"GOC-CREATOR-" + Math.random().toString(36).substring(2,7).toUpperCase(),
    loginAt:new Date().toLocaleString()
  };

  localStorage.setItem("licensegoc_user",JSON.stringify(user));
  return user;
}

function gocLogout(){
  localStorage.removeItem("licensegoc_user");
  window.location.href="index.html";
}

function gocVisitor(){
  const user = {
    name:"VISITOR",
    email:"",
    role:"VISITOR",
    id:"GOC-VISITOR",
    loginAt:new Date().toLocaleString()
  };

  localStorage.setItem("licensegoc_user",JSON.stringify(user));
  return user;
}

function gocRequireUser(){
  const user = gocGetUser();
  if(!user){
    window.location.href="login.html";
  }
}

function gocRenderAuthBar(){
  const user = gocGetUser();

  const bar = document.createElement("div");
  bar.className = "goc-auth-bar";

  bar.innerHTML = user ? `
    <span>${user.role}: ${user.name}</span>
    <button onclick="gocLogout()">LOG OUT</button>
  ` : `
    <button onclick="location.href='login.html'">LOGIN</button>
  `;

  document.body.appendChild(bar);
}

document.addEventListener("DOMContentLoaded",gocRenderAuthBar);
