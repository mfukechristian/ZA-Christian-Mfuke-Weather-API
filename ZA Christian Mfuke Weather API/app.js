//logitude and lattitude of location

const tempDegree = document.querySelector(".temp-degree");
const icon = document.querySelector(".icon");
const description = document.querySelector(".temp-description");
window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=2416106566cd07a29724498b1b23abc5`;

      //fetch
      fetch(API)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const dataTemperature = data.main.temp;
          description.textContent = data.weather[0].description;
          tempDegree.textContent = (dataTemperature - 273.15).toFixed(2);
          icon.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

          console.log(icon);
        });

      console.log(API);
    });
  }
});
