function setActiveLink() {
  console.log('setActiveLink function executed');
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach((link) => {
    link.classList.remove('active');
  });

  // Get the current page's URL
  const currentPageUrl = window.location.pathname;

  // Find the corresponding navigation item based on the URL
  const activeLink = document.querySelector(`.nav-menu a[href="${currentPageUrl}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

// Wait for the document and navigation menu to be fully loaded
$(document).ready(function () {
  $("#nav-placeholder").load("./views/static/nav.html", function () {
    setActiveLink(); // Call setActiveLink after the navigation menu is loaded
  });
});
