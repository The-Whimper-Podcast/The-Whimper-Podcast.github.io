let episode_cells = document.querySelectorAll('.featured-grid .cell');

episode_cells.forEach(cell => {
    window.addEventListener('scroll', function() {
        if (cell.getBoundingClientRect().top < (window.innerHeight/1.5)) {
            cell.style.opacity=1;
            cell.style.transform = 'translateY(0)';
        }
    });
});