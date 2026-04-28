// ===============================
// LICENSEGOC™ AUTO FLOW ENGINE v1
// Stable foundation for project creation + system sync
// ===============================

function gocGetProjects(){
  return JSON.parse(localStorage.getItem("projects") || "[]");
}

function gocSaveProjects(projects){
  localStorage.setItem("projects", JSON.stringify(projects));
  window.dispatchEvent(new Event("licensegoc-sync"));
}

function gocMakeGhostID(){
  return "GOC-" + Math.random().toString(36).substring(2,8).toUpperCase();
}

function gocNow(){
  return new Date().toLocaleString();
}

function gocCreateLog(action, detail){
  return {
    action,
    detail,
    time:gocNow()
  };
}

function gocNormalizeProject(data){
  return {
    id:data.id || gocMakeGhostID(),
    name:data.name || "Untitled Project",
    category:data.category || "General",
    idea:data.idea || "",
    problem:data.problem || "",
    solution:data.solution || "",
    image:data.image || "",
    owner:data.owner || "GỐC",
    status:data.status || "Draft",
    progress:data.progress || 10,
    likes:data.likes || 0,
    watchers:data.watchers || 0,
    members:data.members || [{user:data.owner || "GỐC", role:"Owner"}],
    created:data.created || gocNow(),
    updatedAt:new Date().toISOString(),
    logs:data.logs || [
      gocCreateLog("PROJECT CREATED","Project was created through LICENSEGOC™ Auto Flow Engine.")
    ]
  };
}

function gocCreateProject(data){
  const projects = gocGetProjects();
  const project = gocNormalizeProject(data);

  projects.push(project);
  gocSaveProjects(projects);

  const index = projects.length - 1;
  localStorage.setItem("openProjectIndex", index);

  return {project, index};
}

function gocUpdateCurrentProject(updates, logAction, logDetail){
  const projects = gocGetProjects();
  const index = Number(localStorage.getItem("openProjectIndex") || 0);

  if(!projects[index]) return null;

  const p = projects[index];

  Object.assign(p, updates);
  p.updatedAt = new Date().toISOString();

  if(logAction){
    if(!p.logs) p.logs = [];
    p.logs.unshift(gocCreateLog(logAction, logDetail || ""));
  }

  projects[index] = p;
  gocSaveProjects(projects);

  return p;
}

function gocOpenProject(index){
  localStorage.setItem("openProjectIndex", index);
  window.dispatchEvent(new Event("licensegoc-sync"));
}

function gocGetCurrentProject(){
  const projects = gocGetProjects();
  const index = Number(localStorage.getItem("openProjectIndex") || 0);
  return projects[index] || null;
}

function gocCalcReadiness(p){
  if(!p) return 0;

  let score = 20;
  if(p.idea) score += 15;
  if(p.problem) score += 15;
  if(p.solution) score += 20;
  if(p.image) score += 15;
  if(p.ownershipLocked) score += 10;
  if(p.status === "Protected" || p.status === "Published") score += 10;

  return Math.min(score,100);
}

function gocCalcValue(p){
  if(!p) return 0;

  let value = 1000;
  if(p.idea) value += 3000;
  if(p.problem) value += 3000;
  if(p.solution) value += 5000;
  if(p.image) value += 3000;
  if(p.ownershipLocked) value += 10000;
  if(p.status === "Protected") value += 15000;
  if(p.status === "Published") value += 20000;
  value += (p.likes || 0) * 50;
  value += (p.watchers || 0) * 30;

  return value;
}

function gocSendToUSPTO(){
  const p = gocGetCurrentProject();
  if(!p){
    alert("No project selected.");
    return;
  }

  gocUpdateCurrentProject(
    {usptoSentAt:new Date().toISOString()},
    "USPTO SENT",
    "Project was sent to USPTO preparation."
  );

  window.location.href =
    "uspto.html?title=" + encodeURIComponent(p.name || "") +
    "&idea=" + encodeURIComponent(p.idea || "") +
    "&problem=" + encodeURIComponent(p.problem || "") +
    "&solution=" + encodeURIComponent(p.solution || "");
}

// expose globally
window.LICENSEGOC_AUTO_FLOW = {
  getProjects:gocGetProjects,
  saveProjects:gocSaveProjects,
  createProject:gocCreateProject,
  updateCurrentProject:gocUpdateCurrentProject,
  openProject:gocOpenProject,
  getCurrentProject:gocGetCurrentProject,
  calcReadiness:gocCalcReadiness,
  calcValue:gocCalcValue,
  sendToUSPTO:gocSendToUSPTO
};
