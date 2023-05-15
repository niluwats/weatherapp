import { useEffect, useState } from "react";
import "./App.css";
import citiesJSON from "./assets/cities.json";
import { getWeatherInfo } from "./services/getWeatherData";

function App() {
  const [cityCodes, setCityCodes] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    setCityCodes(citiesJSON.List.map((i) => i.CityCode));
  }, []);

  useEffect(() => {
    if (cityCodes.length > 0) {
      async function fetchData() {
        const result = await getWeatherInfo(cityCodes.join(","));
        setWeatherData(result);
      }
      fetchData();
    }
  }, [cityCodes]);

  return <div className="App"></div>;
}

export default App;
