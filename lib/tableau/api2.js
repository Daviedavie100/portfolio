// Get the container
const visualContainer = document.getElementById("visualContainer");

// Tableau dashboard URL
const fixedURL =
  "https://public.tableau.com/views/League_Table_17353848934230/YoYImprovementRanking?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link";

// Tableau visualization options
let viz;
const options = {
  hideToolbar: true,
  width: visualContainer.offsetWidth,
  height: visualContainer.offsetHeight,
  onFirstInteractive: () => {
    console.log("Tableau dashboard loaded.");
  },
};

// Initialize Tableau Visualization
function initViz() {
  viz = new tableau.Viz(visualContainer, fixedURL, options);
}

// Resize Tableau dashboard dynamically
function resizevisualContainer() {
  if (window.innerWidth < 768) {
    visualContainer.style.overflowX = "auto"; // Enable horizontal scrolling
    visualContainer.style.height = '540px';
    visualContainer.style.innerWidth='100%';
  } else {
    visualContainer.style.overflow = "hidden"; // Disable scrolling for larger screens
    visualContainer.style.height = "580px"; // Default height
  }
  if (viz) {
    viz.setFrameSize(visualContainer.offsetWidth, visualContainer.offsetHeight);
    console.log("Viz resized.");
  }
}

// Event listeners
window.addEventListener("resize", resizevisualContainer);
document.addEventListener("DOMContentLoaded", () => {
  initViz();
  resizevisualContainer(); // Set initial dimensions
});
