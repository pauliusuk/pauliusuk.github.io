// static/js/lazy-load.js
document.addEventListener("DOMContentLoaded", function() {
  if (window.location.pathname === "/games/drum-kit.html" || window.location.pathname === "/games/memory-game.html") {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/css/drum-kit.css";
    document.head.appendChild(link);
  }
});