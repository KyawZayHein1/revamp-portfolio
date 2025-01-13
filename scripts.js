// Function to open a tab
function openTab(evt, tabName) {
  // Hide all tab contents
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active");
  });

  // Remove the "active" class from all tab buttons
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.remove("active");
  });

  // Display the selected tab and mark the button as active
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Function to open a sub-tab
function openSubTab(evt, subTabName) {
  // Hide all sub-tab contents
  document.querySelectorAll(".sub-tab-content").forEach((subTab) => {
    subTab.classList.remove("active");
  });

  // Remove the "active" class from all sub-tab buttons
  document.querySelectorAll(".sub-tab-button").forEach((button) => {
    button.classList.remove("active");
  });

  // Display the selected sub-tab and mark the button as active
  document.getElementById(subTabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Automatically set the default tab to open when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const defaultTab = document.querySelector(".tab-button.default");
  const defaultSubTab = document.querySelector(".sub-tab-button.default");
  if (defaultTab) {
    defaultTab.click(); // Simulate a click to open the default tab
  }
  if (defaultSubTab) {
    defaultSubTab.click(); // Simulate a click to open the default sub-tab
  }
});
