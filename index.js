//theme change
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

//time
function updateTime() {
  //tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");
    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do, YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //edmonton
  let edmontonElement = document.querySelector("#edmonton");
  if (edmontonElement) {
    let edmontonDateElement = edmontonElement.querySelector(".date");
    let edmontonTimeElement = edmontonElement.querySelector(".time");
    let edmontonTime = moment().tz("America/Edmonton");
    edmontonDateElement.innerHTML = edmontonTime.format("MMMM Do, YYYY");
    edmontonTimeElement.innerHTML = edmontonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
updateTime();
setInterval(updateTime, 1000);

//Select function
function updateCity(event) {
  let cityTimeZone = event.target.value;
  //console.log(cityTimeZone);
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  //console.log(cityTime.format("MMMM Do, YYYY"));
  let citiesElement = document.querySelector("#cities");
  //citiesElement.innerHTML = cityTimeZone;
  citiesElement.innerHTML = `
          <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div>
            <div class="time">${cityTime.format("h:mm:ss ")}
            <small>${cityTime.format("A")}</small>
            </div>
          </div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
