const form = document.querySelector("form");
const input = document.querySelector("input");
const weatherIcon = document.querySelector(".card__icon");
const overlay = document.querySelector(".overlay");
const card = document.querySelector(".card");
const errorEl = document.querySelector(".error");

function loader(bool) {
  if (bool) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
}

async function newGetDate(city) {
  getData(city)
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => {});
}
const waetherLOcalStorage = localStorage.getItem("weather");
newGetDate("quva");

function updateUI(data) {
  card.innerHTML = "";
  // city Name
  const cityName = handCreateEl("h2","card__city",`${data.name}, ${data.sys.country}`);
  // icon
  const Icon = handCreateEl("img","card__icon");
  Icon.src=` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
// weather
  const cityWeather = handCreateEl("h2","card__weather", data.weather[0].main);
// temperature
  const cityTemp = handCreateEl("h3","card__temp",`${Math.trunc(data.main.temp - 273.15)} ℃`);

  card.append(cityName);
  card.append(Icon);
  card.append(cityWeather);
  card.append(cityTemp);
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputVal = input.value.trim();
  localStorage.setItem("waether", inputVal);
  newGetDate(inputVal);
  form.reset();
});


function handCreateEl (type,clas,text,src){
  let el=document.createElement(type)
  el.className=clas
  if(text){
    el.textContent=text
  }
  return el
}