(function(){
  if(window.LICENSEGOC_SYSTEM_LOADED) return;
  window.LICENSEGOC_SYSTEM_LOADED = true;

  function loadCSS(file){
    if(document.querySelector('link[href="'+file+'"]')) return;
    const link=document.createElement("link");
    link.rel="stylesheet";
    link.href=file;
    document.head.appendChild(link);
  }

  function loadJS(file){
    if(document.querySelector('script[src="'+file+'"]')) return;
    const script=document.createElement("script");
    script.src=file;
    document.body.appendChild(script);
  }

  loadCSS("floatbar.css");

  loadJS("auth.js");
  loadJS("sync.js");
  loadJS("auto-flow.js");
  loadJS("floatbar.js");
  loadJS("code.js");
})();
