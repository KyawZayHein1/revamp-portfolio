// Function to open a tab
function openTab(evt, tabName) {
  // Hide all tab contents
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.style.display = "none";
  });

  // Remove the "active" class from all tab buttons
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.remove("active");
  });

  // Display the selected tab and mark the button as active
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

// Function to open a sub-tab
function openSubTab(evt, subTabName) {
  // Hide all sub-tab contents
  document.querySelectorAll(".sub-tab-content").forEach((subTab) => {
    subTab.style.display = "none";
  });

  // Remove the "active" class from all sub-tab buttons
  document.querySelectorAll(".sub-tab-button").forEach((button) => {
    button.classList.remove("active");
  });

  // Display the selected sub-tab and mark the button as active
  document.getElementById(subTabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

// Automatically set the default tab to open when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const defaultTab = document.querySelector(".tab-button.active");
  const defaultSubTab = document.querySelector(".sub-tab-button.active");
  if (defaultTab) {
    defaultTab.click(); // Simulate a click to open the default tab
  }
  if (defaultSubTab) {
    defaultSubTab.click(); // Simulate a click to open the default sub-tab
  }
});