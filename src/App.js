import { useEffect, useState } from "react";
import "./App.css";
import citiesJSON from "./assets/cities.json";
import { getWeatherInfo } from "./services/getWeatherData";
import Header from "./components/header/header";
import AddCity from "./components/addcity/addCity";
import Card from "./components/card/card";

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

  return (
    weatherData.length > 0 && (
      <div className="App">
        <Header />
        <AddCity />
        <Card weatherData={weatherData[0]} />
      </div>
    )
  );
}

export default App;
