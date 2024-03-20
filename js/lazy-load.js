// static/js/lazy-load.js
document.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname === "/games/drum-kit.html") {
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/css/drum-kit.css";
        document.head.appendChild(link);
    }
});
