const navButtons = document.querySelectorAll(".nav-btn");
const tabs = document.querySelectorAll(".tab");

function switchTab(tabName) {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  navButtons.forEach((button) => {
    button.classList.remove("active");
  });

  const activeTab = document.getElementById(`tab-${tabName}`);
  const activeButton = document.querySelector(`[data-tab="${tabName}"]`);

  if (activeTab) {
    activeTab.classList.add("active");
  }

  if (activeButton) {
    activeButton.classList.add("active");
  }
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const tabName = button.dataset.tab;
    switchTab(tabName);
  });
});

export { switchTab };
