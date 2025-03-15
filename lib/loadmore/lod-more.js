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


/*
// Additional script for handling hidden project items--Excel
document.addEventListener('DOMContentLoaded', function () {
    const loadMoreButton = document.getElementById('lod-more');
    const hiddenProjects = document.querySelectorAll('#excel .project-item.hidden');
    let itemsToShow = 2; // Number of items to show per click
  
    loadMoreButton.addEventListener('click', function () {
      let visibleItems = 0;
  
      // Loop through the hidden project items and reveal them
      hiddenProjects.forEach((item) => {
        if (item.classList.contains('hidden') && visibleItems < itemsToShow) {
          item.classList.remove('hidden');
          item.classList.add('visible');
          visibleItems++;
        }
      });
  
      // Hide the button if no more items are left to show
      const remainingHiddenItems = document.querySelectorAll('#excel .project-item.hidden').length;
      if (remainingHiddenItems === 0) {
        loadMoreButton.style.display = 'none';
      }
    });
  });
  

// Additional script for handling hidden project items--Power BI
document.addEventListener('DOMContentLoaded', function () {
  const loadMoreButton = document.getElementById('lod-more');
  const hiddenProjects = document.querySelectorAll('#powerBI .project-item.hidden');
  let itemsToShow = 2; // Number of items to show per click

  loadMoreButton.addEventListener('click', function () {
    let visibleItems = 0;

    // Loop through the hidden project items and reveal them
    hiddenProjects.forEach((item) => {
      if (item.classList.contains('hidden') && visibleItems < itemsToShow) {
        item.classList.remove('hidden');
        item.classList.add('visible');
        visibleItems++;
      }
    });

    // Hide the button if no more items are left to show
    const remainingHiddenItems = document.querySelectorAll('#powerBI .project-item.hidden').length;
    if (remainingHiddenItems === 0) {
      loadMoreButton.style.display = 'none';
    }
  });
});
*/


