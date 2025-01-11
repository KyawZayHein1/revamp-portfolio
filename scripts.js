// Function to open a tab
function openTab(evt, tabName) {
    // Hide all tab contents and reset the "active" class for all tab buttons
    const tabs = document.querySelectorAll(".tab-content");
    const tabButtons = document.querySelectorAll(".tab-button");
  
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabButtons.forEach((button) => button.classList.remove("active"));
  
    // Display the selected tab and add the "active" class to the clicked button
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
      selectedTab.classList.add("active");
      evt.currentTarget.classList.add("active");
    }
  }
  
  // Function to open a sub-tab
  function openSubTab(evt, subTabName) {
    // Hide all sub-tab contents and reset the "active" class for all sub-tab buttons
    const subTabs = document.querySelectorAll(".sub-tab-content");
    const subTabButtons = document.querySelectorAll(".sub-tab-button");
  
    subTabs.forEach((subTab) => subTab.classList.remove("active"));
    subTabButtons.forEach((button) => button.classList.remove("active"));
  
    // Display the selected sub-tab and add the "active" class to the clicked button
    const selectedSubTab = document.getElementById(subTabName);
    if (selectedSubTab) {
      selectedSubTab.classList.add("active");
      evt.currentTarget.classList.add("active");
    }
  }
  
  // Automatically set the default tab and sub-tab to open when the page loads
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
  