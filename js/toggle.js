// Function to toggle utterances theme
function utterancesTheme(body) {
  const utterancesFrame = document.querySelector('.utterances-frame');
  if (utterancesFrame && body) {
    const theme = body.classList.contains('light') ? 'github-light' : 'photon-dark';
    const message = {
      type: 'set-theme',
      theme: theme
    };
    utterancesFrame.contentWindow.postMessage(message, 'https://utteranc.es'); // Specify target origin
  }
}

// Function to toggle light mode
function toggleLightMode() {
  const body = document.querySelector("body");
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
    toggleSyntaxCSS(body);
  } else {
    // If no mode saved, set default theme
    const defaultMode = "github-light"; // Set your default mode here
    body.classList.add(defaultMode);
    localStorage.setItem("mode", defaultMode);
    utterancesTheme(body);
    toggleSyntaxCSS(body);
  }
});

// Add event listener to toggle light mode and handle storage event
const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", function() {
  toggleLightMode();
});

// Handle storage event to update mode and themes
window.addEventListener("storage", function(event) {
  if (event.key === "mode") {
    const body = document.querySelector("body");
    const savedMode = localStorage.getItem("mode");
    body.className = ""; // Clear existing classes
    body.classList.add(savedMode);
    utterancesTheme(body);
    toggleSyntaxCSS(body);
  }
});

// Call toggleSyntaxCSS initially to set the syntax CSS based on the saved mode
toggleSyntaxCSS(document.querySelector("body")); // Pass body directly here

// Grant access to local storage for utterances
document.addEventListener("DOMContentLoaded", function() {
  if (document.hasStorageAccess) {
    document.hasStorageAccess().then(function(hasAccess) {
      if (!hasAccess) {
        document.requestStorageAccess().then(function() {
          console.log("Storage access granted for utterances.");
        });
      }
    });
  }
});
