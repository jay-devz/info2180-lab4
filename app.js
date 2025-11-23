document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const resultDiv = document.getElementById('result');

    searchBtn.addEventListener('click', function() {
        searchSuperheroes();
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchSuperheroes();
        }
    });

    function searchSuperheroes() {
        // Sanitize input - remove any HTML tags and trim whitespace
        const query = searchInput.value.trim().replace(/</g, "&lt;").replace(/>/g, "&gt;");
        
        // Build URL with query parameter
        const url = `superheroes.php?query=${encodeURIComponent(query)}`;
        
        // Make AJAX request
        fetch(url)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                resultDiv.innerHTML = '<p class="error">An error occurred while searching.</p>';
                console.error('Error:', error);
            });
    }
});