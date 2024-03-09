if(!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform)){
  $(function(){
    var elem = document.createElement("style");
    elem.type = "text/css";
    elem.innerHTML = "@media (max-width:767px) { #twitter-widget-0 { width:342px !important; } }";
    document.body.appendChild(elem);
  });
}