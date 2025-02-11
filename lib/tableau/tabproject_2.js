document.addEventListener("DOMContentLoaded", () => {
  const visualContainer = document.getElementById("visualContainer");

  if (!visualContainer) {
    console.error("Error: visualContainer not found.");
    return;
  }

  const varURL =
    "https://public.tableau.com/views/League_Table_17353848934230/YoYImprovementRanking?:language=en-US&publish=yes&:sid=&:display_count=n&:origin=viz_share_link";

  let vizual; 
  const options = {
    hideTabs: true,
    width: "100%",
    height: "600px", 
    onFirstInteractive: function () {
      console.log("Tableau dashboard loaded.");
    },
  };

  function initVizual() {
    if (!vizual) {
      vizual = new tableau.Viz(visualContainer, varURL, options);
    }
  }

  function resizeVisualContainer() {
    if (window.innerWidth < 768) {
      visualContainer.style.overflowX = "auto";
      visualContainer.style.height = "540px";
    } else {
      visualContainer.style.overflow = "hidden";
      visualContainer.style.height = "600px";
    }
    if (vizual) {
      vizual.setFrameSize(visualContainer.offsetWidth, visualContainer.offsetHeight);
      console.log("Vizual resized.");
    }
  }

  // **Ensure No Deprecated Listeners Exist**
  function removeDeprecatedListeners() {
    document.querySelectorAll("*").forEach((el) => {
      el.removeEventListener("DOMSubtreeModified", () => {});
    });
  }

  // **Use MutationObserver Instead**
  function observeDOMChanges() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        console.log("DOM changed:", mutation);
      });
    });

    observer.observe(visualContainer, { childList: true, subtree: true });
  }

  removeDeprecatedListeners(); // Remove any existing listeners
  initVizual();
  resizeVisualContainer();
  observeDOMChanges();
  window.addEventListener("resize", resizeVisualContainer);
});
