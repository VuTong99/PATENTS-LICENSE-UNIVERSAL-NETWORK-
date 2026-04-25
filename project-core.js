// ===============================
// LICENSEGOC™ PROJECT CORE v16
// ===============================

// tạo project mới
function createProject(data){
  let projects = JSON.parse(localStorage.getItem("goc_projects") || "[]");

  const newProject = {
    id: Date.now(),
    name: data.name,
    category: data.category,
    description: data.description,
    problem: data.problem,
    createdAt: new Date().toISOString(),
    stage: "BUILD",
    progress: 10
  };

  projects.push(newProject);
  localStorage.setItem("goc_projects", JSON.stringify(projects));

  alert("✅ Project đã được tạo!");
  renderProjects();
}

// lấy danh sách project
function getProjects(){
  return JSON.parse(localStorage.getItem("goc_projects") || "[]");
}

// hiển thị project ra UI
function renderProjects(){
  const container = document.getElementById("project-list");
  if(!container) return;

  const projects = getProjects();

  container.innerHTML = "";

  projects.reverse().forEach(p=>{
    const div = document.createElement("div");
    div.className = "project-card";

    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.category}</p>
      <small>${p.description}</small>
      <div style="margin-top:8px;color:#f1c76b">
        ${p.progress}% • ${p.stage}
      </div>
    `;

    container.appendChild(div);
  });
}

// khi load trang → load project
window.addEventListener("load", renderProjects);
