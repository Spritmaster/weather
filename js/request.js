const KEY = "ce740964755ba853102cbbdb85ff45fc";

async function getData(city) {
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;
  loader(true);
  const response = await fetch(API);
  if (response.status !== 200) {
    loader(false);
    throw new Error("errer");
  }
  const data = await response.json();
  loader(false);
  return data;
}
