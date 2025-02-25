
    document.addEventListener('DOMContentLoaded', function () { 
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

        document.getElementById('searchForm').addEventListener('submit', handleSearch);

    }); 
