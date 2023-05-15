import icon from "../../assets/weatherIcon.png";
import "./header.css";

export default function Header() {
  return (
    <div className="headerOuter">
      <div className="header">
        <img alt="weather-icon" src={icon} />
        <h2 className="appTitle font-weight-bold">Weather App</h2>
      </div>
    </div>
  );
}
