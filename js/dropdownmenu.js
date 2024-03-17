document.addEventListener("DOMContentLoaded", function() {
    // Get all dropdown-toggle elements for categories and sections
    var dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    // Loop through each dropdown-toggle element
    dropdownToggles.forEach(function(toggle) {
        // Get the associated dropdown menu
        var dropdownMenu = toggle.nextElementSibling;

        // Function to close dropdown menu
        function closeDropdown() {
            dropdownMenu.classList.remove('show');
        }

        // Add click event listener to each dropdown-toggle element
        toggle.addEventListener('click', function(event) {
            // Prevent the default action (e.g., following the link)
            event.preventDefault();

            // Toggle the 'show' class on the dropdown menu
            dropdownMenu.classList.toggle('show');
        });

        // Close dropdown menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!dropdownMenu.contains(event.target) && event.target !== toggle) {
                closeDropdown();
            }
        });

        // Close dropdown menu when scrolling down
        document.addEventListener('scroll', function(event) {
            closeDropdown();
        });
    });
});
