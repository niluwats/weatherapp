import icon from "../../assets/weatherIcon.png";
import "./header.css";

export default function Header() {
  return (
    <header className="headerOuter">
      <div className="header">
        <img className="weather_icon" alt="weather-icon" src={icon} />
        <p className="appTitle font-weight-bold">Weather App</p>
      </div>
    </header>
  );
}
