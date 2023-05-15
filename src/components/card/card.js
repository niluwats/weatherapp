import "./card.css";
import arrowIcon from "../../assets/arrowhead.png";
import { formatDate, formatFullDate } from "../../utils/formatDate";

export default function Card(props) {
  const {
    timestamp,
    city,
    country,
    temperature,
    max_temp,
    min_temp,
    sunrise,
    sunset,
    humidity,
    pressure,
    visibility,
    wind,
    deg,
    description,
    icon,
  } = props.weatherData;

  const src = `http://openweathermap.org/img/w/${icon}.png`;

  return (
    <div className="bg-danger card_outer text-center">
      <div className="upper">
        <div className="row">
          <div className="col">
            <h3>
              {city},{country}
            </h3>
            <p>{formatFullDate(timestamp)}</p>
          </div>
          <div className="col">
            <h1>{temperature}&deg;c</h1>
          </div>
        </div>
        <div className="row align-items-end">
          <div className="col">
            <img src={src} alt="description-icon" />
            <span className="description">{description}</span>
          </div>
          <div className="col">
            <h6>Temp Min: {min_temp}&deg;c</h6>
            <h6>Temp Max: {max_temp}&deg;c</h6>
          </div>
        </div>
      </div>
      <div className="lower">
        <div className="row align-items-center">
          <div className="col text-start">
            <h6>
              <b>Pressure:</b> {pressure}hPa
            </h6>
            <h6>
              <b>Humidity:</b> {humidity}%
            </h6>
            <h6>
              <b>Visibility:</b> {visibility / 1000}km
            </h6>
          </div>

          <div className="col text-center">
            <div className="separator-left"></div>
          </div>
          <div className="col" style={{ margin: "-25%" }}>
            <img src={arrowIcon} alt="arrow-icon" />
            <h6>
              {wind}m/s {deg} <b>Degree</b>
            </h6>
          </div>
          <div className="col text-center">
            <div className="separator-right"></div>
          </div>
          <div className="col text-end">
            <h6>
              <b>Sunrise:</b> {formatDate(sunrise)}
            </h6>
            <h6>
              <b>Sunset:</b> {formatDate(sunset)}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
