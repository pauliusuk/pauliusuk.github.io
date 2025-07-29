document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".toggle-toc");
  const toc = document.getElementById("toc");
  let tocState = localStorage.getItem("tocState");

  // Default to collapsed if no saved state
  if (tocState === null) {
    tocState = "collapsed";
    localStorage.setItem("tocState", tocState);
  }

  // Apply saved state
  if (tocState === "collapsed") {
    toggleButton.classList.add("collapsed");
    toc.classList.add("collapsed");
  } else {
    toggleButton.classList.remove("collapsed");
    toc.classList.remove("collapsed");
  }

  // Remove the temporary hidden class so both are revealed correctly
  toc.classList.remove("js-hidden");
  toggleButton.classList.remove("js-hidden");

  // Add toggle functionality
  toggleButton.addEventListener("click", function () {
    const isCollapsed = toggleButton.classList.contains("collapsed");

    if (isCollapsed) {
      toggleButton.classList.remove("collapsed");
      toc.classList.remove("collapsed");
      localStorage.setItem("tocState", "expanded");
    } else {
      toggleButton.classList.add("collapsed");
      toc.classList.add("collapsed");
      localStorage.setItem("tocState", "collapsed");
    }
  });
});

