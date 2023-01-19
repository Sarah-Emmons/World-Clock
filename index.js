function themeChange() {
  let theme = document.querySelector("body");
  let container = document.querySelector(".container");
  let select = document.querySelector("select");
  let button = document.querySelector("button");
  let city = document.querySelector(".city");
  if (theme.classList.contains("dark-body") === true) {
    theme.classList.remove("dark-body");
    container.classList.remove("dark-container");
    select.classList.remove("dark-select");
    button.classList.remove("dark-button");
    city.classList.remove("dark-city");
    button.innerHTML = "Dark Theme";
  } else {
    theme.classList.add("dark-body");
    container.classList.add("dark-container");
    select.classList.add("dark-select");
    button.classList.add("dark-button");
    button.innerHTML = "Light Theme";
    city.classList.add("dark-city");
  }
}
let button = document.querySelector("button");
button.addEventListener("click", themeChange);
