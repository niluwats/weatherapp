import { useEffect, useState } from "react";
import "./App.css";
import citiesJSON from "./assets/cities.json";
import { getWeatherInfo } from "./services/getWeatherData";
import Header from "./components/header/header";
import { Route, Routes } from "react-router";
import Dashboard from "./pages/dashboard/dashboard";
import View from "./pages/view/view";

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
        <Routes>
          <Route path="/" element={<Dashboard weatherData={weatherData} />} />
          <Route
            path="/view/:id"
            element={<View weatherData={weatherData} />}
          ></Route>
        </Routes>
      </div>
    )
  );
}

export default App;
