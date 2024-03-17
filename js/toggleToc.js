document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.querySelector(".toggle-toc");
  const toc = document.getElementById("toc");
  const tocState = localStorage.getItem("tocState");

  // Check if there's a stored state for the TOC
  if (tocState === "collapsed") {
    toggleButton.classList.add("collapsed");
    toc.classList.add("collapsed");
  }

  toggleButton.addEventListener("click", function() {
    const isCollapsed = toggleButton.classList.contains("collapsed");

    // Toggle the collapsed state
    if (!isCollapsed) {
      toggleButton.classList.add("collapsed");
      toc.classList.add("collapsed");
      // Store the collapsed state in local storage
      localStorage.setItem("tocState", "collapsed");
    } else {
      toggleButton.classList.remove("collapsed");
      toc.classList.remove("collapsed");
      // Store the expanded state in local storage
      localStorage.setItem("tocState", "expanded");
    }
  });
});
