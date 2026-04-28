// LICENSEGOC™ SYSTEM SYNC v1

function getProjects(){
  return JSON.parse(localStorage.getItem("projects") || "[]");
}

function saveProjects(projects){
  localStorage.setItem("projects", JSON.stringify(projects));
  window.dispatchEvent(new Event("licensegoc-sync"));
}

function getCurrentProjectIndex(){
  return Number(localStorage.getItem("openProjectIndex") || 0);
}

function getCurrentProject(){
  const projects = getProjects();
  return projects[getCurrentProjectIndex()] || null;
}

function updateCurrentProject(updates){
  const projects = getProjects();
  const index = getCurrentProjectIndex();

  if(!projects[index]) return null;

  projects[index] = {
    ...projects[index],
    ...updates,
    updatedAt: new Date().toISOString()
  };

  saveProjects(projects);
  return projects[index];
}

function setCurrentProject(index){
  localStorage.setItem("openProjectIndex", index);
  window.dispatchEvent(new Event("licensegoc-sync"));
}

window.addEventListener("storage", function(e){
  if(e.key === "projects" || e.key === "openProjectIndex"){
    window.dispatchEvent(new Event("licensegoc-sync"));
  }
});
