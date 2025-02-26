
    document.addEventListener('DOMContentLoaded', function () { 
        var searchIcon = document.getElementById('search-icon');
        var searchInput = document.getElementById('search-field');
        var searchForm = document.getElementById('searchForm');
    
        searchIcon.addEventListener('click', function () {
            if (searchInput.classList.contains('active')) {
                searchInput.classList.remove('active'); // Hide input
                searchInput.value = ""; // Clear text
            } else {
                searchInput.classList.add('active'); // Show input
                searchInput.focus(); // Auto-focus
            }
        });
// this is for the search functionality 
        function handleSearch(event) {
            event.preventDefault();

            var query = document.getElementById('searchInput').value.trim();

            if (query === "") {
                alert("Please enter a search term.");
                return;
            }

            document.getElementById('searchResults').innerHTML =
                '<p>You searched for: <strong>' + query + '</strong></p>';

            var searchModal = new bootstrap.Modal(document.getElementById('searchModal'));
            searchModal.show();
        }

        searchForm.addEventListener('submit', handleSearch);

        document.addEventListener("click", function (event) {
            if (event.target !== searchInput && event.target !== searchIcon) {
                searchInput.classList.remove("active");
            }
        });
    });
