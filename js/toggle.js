// Function to toggle theme
function toggleTheme(body) {
  const frame = document.querySelector('.frame');
  if (frame && body) {
    const theme = body.classList.contains('light') ? 'light-theme' : 'dark-theme';
    const message = {
      type: 'set-theme',
      theme: theme
    };
    frame.contentWindow.postMessage(message, 'https://example.com'); // Specify target origin
  }
}

// Function to toggle light mode
function toggleLightMode() {
  const body = document.querySelector("body");
  body.classList.toggle("light");
  const mode = body.classList.contains("light") ? "light" : "dark-theme";
  localStorage.setItem("mode", mode);
  toggleTheme(body); // Call this to synchronize theme with light mode
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
    // Update theme based on the saved mode
    toggleTheme(body);
    toggleSyntaxCSS(body);
  } else {
    // If no mode saved, set default theme
    const defaultMode = "light-theme"; // Set your default mode here
    body.classList.add(defaultMode);
    localStorage.setItem("mode", defaultMode);
    toggleTheme(body);
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
    toggleTheme(body);
    toggleSyntaxCSS(body);
  }
});

// Call toggleSyntaxCSS initially to set the syntax CSS based on the saved mode
toggleSyntaxCSS(document.querySelector("body")); // Pass body directly here

// Grant access to local storage
document.addEventListener("DOMContentLoaded", function() {
  if (document.hasStorageAccess) {
    document.hasStorageAccess().then(function(hasAccess) {
      if (!hasAccess) {
        document.requestStorageAccess().then(function() {
          console.log("Storage access granted.");
        });
      }
    });
  }
});
