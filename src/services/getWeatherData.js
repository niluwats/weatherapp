import { cacheData, getCachedData } from "./cachingData";

export async function getWeatherInfo(cityCodes) {
  let data = {};
  const cityCodesToFetch = [];
  const allData = [];

  cityCodes.forEach((element) => {
    data = getCachedData(element);

    if (data) {
      allData.push(data);
    } else {
      cityCodesToFetch.push(element);
    }
  });

  if (cityCodesToFetch.length > 0) {
    const url = `http://api.openweathermap.org/data/2.5/group?id=${cityCodesToFetch.join(
      ","
    )}&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
    try {
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
      allData.push(...weatherData);
    } catch (error) {
      console.log(error);
    }
  }

  return allData;
}
