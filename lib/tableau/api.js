// 1. Place to hold the dashboard
const vizContainer = document.getElementById("vizContainer");

// 2. URLs for the dashboards
const autoURL =
  "https://public.tableau.com/views/League_Table_17353848934230/leaguetable?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";
const fixedURL =
  "https://public.tableau.com/views/League_Table_17353848934230/leaguetable?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link";

// 3. Options for Tableau visualization
let viz;
const options = {
  height: window.innerHeight,
  width: window.innerWidth,
  hideToolbar: true,
  onFirstInteractive: () => {
    console.log(`Viz has loaded`);
  },
};

// Function to initialize the Tableau dashboard
function initViz() {
  viz = new tableau.Viz(vizContainer, fixedURL, options); // Load fixed-size dashboard by default
}

// Function to resize Tableau dashboard automatically
function autoResize() {
  if (viz) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    viz.setFrameSize(width, height);
    console.log(`Auto-resizing dashboard to: ${width}x${height}`);
  }
}

// Function to resize a fixed-size Tableau dashboard
function reSizeFixedDashboard() {
  if (viz) {
    const sheet = viz.getWorkbook().getActiveSheet();
    sheet
      .changeSizeAsync({
        behavior: "EXACTLY",
        maxSize: {
          height: window.innerHeight,
          width: window.innerWidth,
        },
      })
      .then(() => {
        viz.setFrameSize(window.innerWidth, window.innerHeight);
        console.log("Fixed-size dashboard resized.");
      });
  }
}

// Listen for window resize and adjust the dashboard accordingly
window.addEventListener("resize", () => {
  console.log(
    `Resizing the window to ${window.innerHeight}x${window.innerWidth}`
  );
  autoResize();
});

// Initialize the Tableau visualization when the DOM content is loaded
document.addEventListener("DOMContentLoaded", initViz);
