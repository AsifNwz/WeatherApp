// https://home.openweathermap.org/api_keys

const apiKey = "77827b364ba916acf97c7daea5efbeca";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherIcon2 = document.querySelector(".weather-icon_2");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    // console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".feels_like").innerHTML =
      Math.round(data.main.feels_like) + "°c";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./images/clouds.png";
      weatherIcon2.src = "./images/clouds.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "./images/snow.png";
      weatherIcon2.src = "./images/snow.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./images/drizzle.png";
      weatherIcon2.src = "./images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./images/mist.png";
      weatherIcon2.src = "./images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./images/rain.png";
      weatherIcon2.src = "./images/rain.png";
    } else {
      weatherIcon.src = "./images/clear.png";
      weatherIcon2.src = "./images/clear.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", function () {
  checkWeather(searchBox.value);
});
