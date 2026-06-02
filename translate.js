(function(){
if(window.LICENSEGOC_TRANSLATE_READY) return;
window.LICENSEGOC_TRANSLATE_READY = true;

window.googleTranslateElementInit = function(){
  if(!document.getElementById("google_translate_element")) return;

  new google.translate.TranslateElement({
    pageLanguage: "vi",
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false
  }, "google_translate_element");
};

if(!document.querySelector('script[src*="translate_a/element.js"]')){
  const s = document.createElement("script");
  s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(s);
}
})();
