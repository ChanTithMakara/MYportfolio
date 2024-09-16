document.getElementById('searchInput').addEventListener('input', function() {
    var query = this.value.toLowerCase(); // Get the search query
    var projects = document.querySelectorAll('.project-card'); // Select all project cards

    projects.forEach(function(project) {
        var title = project.getAttribute('data-title').toLowerCase(); // Get the project title from data attribute
        if (title.includes(query)) {
            project.classList.remove('hidden'); // Show project if it matches the query
        } else {
            project.classList.add('hidden'); // Hide project if it does not match
        }
    });
});
