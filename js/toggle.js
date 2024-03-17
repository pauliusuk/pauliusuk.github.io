// Function to toggle utterances theme
function utterancesTheme(body) {
  const utterancesFrame = document.querySelector('.utterances-frame');
  if (utterancesFrame && body) {
    const theme = body.classList.contains('light') ? 'github-light' : 'photon-dark';
    const message = {
      type: 'set-theme',
      theme: theme
    };
    utterancesFrame.contentWindow.postMessage(message, '*'); // Use '*' as the target origin
  }
}

// Function to toggle light mode
function toggleLightMode() {
  const body = document.querySelector("body"); // Move body variable here
  body.classList.toggle("light");
  const mode = body.classList.contains("light") ? "light" : "github-light";
  localStorage.setItem("mode", mode);
  utterancesTheme(body); // Call this to synchronize utterances theme with light mode
  toggleSyntaxCSS(body); // Call this to toggle syntax CSS based on the mode
}

// Function to toggle syntax CSS based on mode
function toggleSyntaxCSS(body) {
  const linkElement = document.querySelector("#syntax-css");
  if (body.classList.contains("light")) {
    linkElement.href = "/css/syntaxLight.css";
  } else {
    linkElement.href = "/css/syntax.css";
  }
}

// Check if there's a mode saved in localStorage
document.addEventListener("DOMContentLoaded", function() {
  const savedMode = localStorage.getItem("mode");
  const body = document.querySelector("body");
  if (savedMode) {
    body.classList.add(savedMode);
    // Update utterances theme based on the saved mode
    utterancesTheme(body);
  } else {
    // If no mode saved, set default theme
    const defaultMode = "github-light"; // Set your default mode here
    body.classList.add(defaultMode);
    localStorage.setItem("mode", defaultMode);
    utterancesTheme(body);
    toggleSyntaxCSS(body);
  }
});

// Add event listener to toggle light mode
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", function() {
  toggleLightMode(); // Removed 'body' argument since it's not needed anymore
});

// Call toggleSyntaxCSS initially to set the syntax CSS based on the saved mode
toggleSyntaxCSS(document.querySelector("body")); // Pass body directly here
