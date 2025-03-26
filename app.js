let darkMode = document.querySelector("#darkMode");
let body = document.body;
let menu = document.querySelector("#menu");
let nav = document.querySelector("nav");

const getThemeUse = () => {
  let theme = localStorage.getItem("theme");

  if (theme === null) {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  } else {
    setTheme(theme);
  }
};

const setTheme = (theme) => {
  if (theme === "dark") {
    body.classList.add("dark-mode");
    darkMode.classList.replace("fa-moon", "fa-sun");
  } else {
    body.classList.remove("dark-mode");
    darkMode.classList.replace("fa-sun", "fa-moon");
  }
};

getThemeUse();

darkMode.addEventListener("click", () => {
  if (darkMode.classList[1] === "fa-moon") {
    setTheme("dark");
    localStorage.setItem("theme", "dark");
  } else {
    setTheme("light");
    localStorage.setItem("theme", "light");
  }
});

menu.addEventListener("click", () => {
  if (menu.classList[1] === "fa-bars") {
    nav.classList.add("show");
    menu.classList.replace("fa-bars", "fa-xmark");
  } else {
    nav.classList.remove("show");
    menu.classList.replace("fa-xmark", "fa-bars");
  }
});
