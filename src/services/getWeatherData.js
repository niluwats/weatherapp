import { key, cacheData, getCachedData } from "./cachingData";

export async function getWeatherInfo(cityCodes) {
  const url = `http://api.openweathermap.org/data/2.5/group?id=${cityCodes}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;

  const cachedData = getCachedData(key);
  console.log(localStorage.getItem(key));

  if (cachedData) {
    return cachedData;
  }

  try {
    console.log("ok");
    const res = await fetch(url).then((response) => response.json());
    const weatherData = res.list.map((item) => ({
      id: item.id,
      city: item.name,
      country: item.sys.country,
      temperature: item.main.temp,
      timestamp: item.dt,
      min_temp: item.main.temp_min,
      max_temp: item.main.temp_max,
      humidity: item.main.humidity,
      pressure: item.main.pressure,
      visibility: item.visibility,
      sunrise: item.sys.sunrise,
      sunset: item.sys.sunset,
      wind: item.wind.speed,
      deg: item.wind.deg,
      description: item.weather[0].description,
      icon: item.weather[0].icon,
    }));

    cacheData(weatherData);
    return weatherData;
  } catch (error) {
    console.log(error);
  }
}
