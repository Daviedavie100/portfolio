// 1. Get the container
const vizContainer = document.getElementById("vizContainer");

// 2. Tableau dashboard URL
const fixedURL =
  "https://public.tableau.com/views/League_Table_17353848934230/leaguetable?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";

// 3. Options for Tableau visualization
let viz;
const options = {
  hideToolbar: true,
  onFirstInteractive: () => {
    console.log(`Viz has loaded`);
  },
};

// Function to initialize the Tableau dashboard
function initViz() {
  // Get the container's size
  const width = vizContainer.offsetWidth;
  const height = vizContainer.offsetHeight;

  // Update options with the container's dimensions
  options.width = width;
  options.height = height;

  // Load the Tableau visualization
  viz = new tableau.Viz(vizContainer, fixedURL, options);
}

// Function to resize the dashboard dynamically
function autoResize() {
  if (viz) {
    const width = vizContainer.offsetWidth;
    const height = vizContainer.offsetHeight;

    // Adjust the Tableau dashboard's size to match the container
    viz.setFrameSize(width, height);
    console.log(`Dashboard resized to: ${width}x${height}`);
  }
}

// Listen for window resize and resize the dashboard
window.addEventListener("resize", () => {
  console.log("Window resized, adjusting Tableau dashboard...");
  autoResize();
});

// Initialize the Tableau visualization when the DOM content is loaded
document.addEventListener("DOMContentLoaded", initViz);