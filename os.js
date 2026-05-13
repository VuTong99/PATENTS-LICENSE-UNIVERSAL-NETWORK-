// LICENSEGOC OS™ ENGINE v1

(function(){
  if(window.LICENSEGOC_OS_ENGINE) return;
  window.LICENSEGOC_OS_ENGINE = true;

  window.LICENSEGOC_OS = {
    version: "1.0",
    name: "LICENSEGOC OS™",

    openModule(file){
      window.location.href = file;
    },

    goHome(){
      window.location.href = "index.html";
    },

    goMaster(){
      window.location.href = "master-system.html";
    },

    notify(message){
      alert(message);
    }
  };

  document.addEventListener("DOMContentLoaded", function(){
    console.log("LICENSEGOC OS™ ENGINE ACTIVE");
  });

})();
