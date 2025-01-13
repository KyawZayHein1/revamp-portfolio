// Function to open a tab
function openTab(evt, tabName) {
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.style.display = "none";
    tab.classList.remove("active");
  });

  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.remove("active");
  });

  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Function to open a sub-tab
function openSubTab(evt, subTabName) {
  document.querySelectorAll(".sub-tab-content").forEach((subTab) => {
    subTab.style.display = "none";
    subTab.classList.remove("active");
  });

  document.querySelectorAll(".sub-tab-button").forEach((button) => {
    button.classList.remove("active");
  });

  document.getElementById(subTabName).style.display = "block";
  document.getElementById(subTabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Automatically set the default tab and sub-tab to open when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const defaultTab = document.querySelector(".tab-button.default");
  const defaultSubTab = document.querySelector(".sub-tab-button.default");

  if (defaultTab) defaultTab.click();
  if (defaultSubTab) defaultSubTab.click();
});
