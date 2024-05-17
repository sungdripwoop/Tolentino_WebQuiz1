document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search');
  const searchButton = document.getElementById('searchbtn');

  // Initially hide the search input
  searchInput.style.display = 'none';

  // Toggle function to show/hide search input
  function toggleSearch() {
    if (searchInput.style.display === 'none') {
      searchInput.style.display = 'inline-block';
    } else {
      searchInput.style.display = 'none';
    }
  }

  // Add event listener to search button
  searchButton.addEventListener('click', toggleSearch);
});