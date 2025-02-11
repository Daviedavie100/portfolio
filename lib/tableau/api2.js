// Get the container
const vizContainer = document.getElementById("vizContainer");

// Tableau dashboard URL
const fixedURL =
  "https://public.tableau.com/views/League_Table_17353848934230/leaguetable?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";

// Tableau visualization options
let viz;
const options = {
  hideToolbar: true,
  width: vizContainer.offsetWidth,
  height: vizContainer.offsetHeight,
  onFirstInteractive: () => {
    console.log("Tableau dashboard loaded.");
  },
};

// Initialize Tableau Visualization
function initViz() {
  viz = new tableau.Viz(vizContainer, fixedURL, options);
}

// Resize Tableau dashboard dynamically
function resizeVizContainer() {
  if (window.innerWidth < 768) {
    vizContainer.style.overflowX = "auto"; // Enable horizontal scrolling
    vizContainer.style.height = '540px';
    vizContainer.style.innerWidth='100%';
  } else {
    vizContainer.style.overflow = "hidden"; // Disable scrolling for larger screens
    vizContainer.style.height = "580px"; // Default height
  }
  if (viz) {
    viz.setFrameSize(vizContainer.offsetWidth, vizContainer.offsetHeight);
    console.log("Viz resized.");
  }
}

// Event listeners
window.addEventListener("resize", resizeVizContainer);
document.addEventListener("DOMContentLoaded", () => {
  initViz();
  resizeVizContainer(); // Set initial dimensions
});
