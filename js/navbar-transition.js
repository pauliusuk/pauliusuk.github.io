var lastScrollTop = 0;
var navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function() {
  var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if (currentScroll > lastScrollTop) {
    // Scrolling down
    navbar.style.top = "-100px"; // Adjust the value according to your navbar height
  } else {
    // Scrolling up
    navbar.style.top = "0";
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

  // Show navbar only when at the top of the page
  if (currentScroll <= 0) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px"; // Adjust the value according to your navbar height
  }
})
