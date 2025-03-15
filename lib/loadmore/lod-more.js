document.addEventListener('DOMContentLoaded', function () {
  const itemsToShow = 2; // Number of items to show per click

  // Get all "Load More" buttons
  const loadMoreButtons = document.querySelectorAll('.lod-more-btn');

  loadMoreButtons.forEach((button) => {
      button.addEventListener('click', function () {
          const section = button.closest('.daviefolio-project-resent'); // Find the parent section
          const hiddenProjects = section.querySelectorAll('.project-item.hidden');

          let visibleItems = 0;

          // Loop through the hidden project items and reveal them
          hiddenProjects.forEach((item) => {
              if (visibleItems < itemsToShow) {
                  item.classList.remove('hidden');
                  visibleItems++;
              }
          });

          // Hide the button if no more items are left to show
          if (section.querySelectorAll('.project-item.hidden').length === 0) {
              button.style.display = 'none';
          }
      });
  });
});