const darkBtn = document.getElementById("dark__mode");
const lightBtn = document.getElementById("light__mode");
const main = document.getElementById("main");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  main.classList.add("dark");
  main.classList.remove("light");
  darkBtn.classList.add("active");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  main.classList.add("light");
  main.classList.remove("dark");
  darkBtn.classList.remove("active");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

darkBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});