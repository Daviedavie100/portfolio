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
    adjustFontForSmallScreens(); // Adjust font on load
  },
};

// Function to initialize the Tableau dashboard
function initViz() {
  const width =
    window.innerWidth < 768 ? window.innerWidth * 1.2 : vizContainer.offsetWidth; // Wider on small screens
  const height = vizContainer.offsetHeight;

  options.width = width;
  options.height = height;

  // Load the Tableau visualization
  viz = new tableau.Viz(vizContainer, fixedURL, options);
}

// Function to resize the dashboard dynamically
function autoResize() {
  if (viz) {
    const width =
      window.innerWidth < 768 ? window.innerWidth * 1.2 : vizContainer.offsetWidth; // Wider for scrolling on small screens
    const height = vizContainer.offsetHeight;

    viz.setFrameSize(width, height);
    console.log(`Dashboard resized to: ${width}x${height}`);
    adjustFontForSmallScreens(); // Adjust font on resize
  }
}

// Function to adjust the font size for small screens
function adjustFontForSmallScreens() {
  if (window.innerWidth < 768) {
    // Get Tableau's iframe and apply a custom CSS style
    const iframe = viz.getVizIframe();
    const style = document.createElement("style");
    style.textContent = `
      * {
        font-size: 7px !important; /* Smaller font for small screens */
      }
    `;
    iframe.contentDocument.head.appendChild(style);
    console.log("Font size adjusted for small screens.");
  }
}

// Listen for window resize and resize the dashboard
window.addEventListener("resize", () => {
  console.log("Window resized, adjusting Tableau dashboard...");
  autoResize();
});

// Initialize the Tableau visualization when the DOM content is loaded
document.addEventListener("DOMContentLoaded", initViz);
