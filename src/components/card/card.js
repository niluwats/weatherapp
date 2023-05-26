import "./card.css";
import arrowIcon from "../../assets/arrowhead.png";
import { formatDate, formatFullDate } from "../../utils/formatDate";
import colorsJson from "../../assets/colors.json";

export default function Card(props) {
  const {
    id,
    data: {
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
    },
  } = props;

  const src = `http://openweathermap.org/img/w/${icon}.png`;
  const colors = colorsJson.colours.map((color) => color);

  return (
    <div
      className="card_outer text-center"
      style={{ backgroundColor: colors[id % colors.length] }}
    >
      <div className="upper">
        <div className="row justify-content-evenly">
          <div className="col-5 col-sm-4 col-md-6 col-lg-6">
            <p className="p-city">
              {city}, {country}
            </p>
            <p>{formatFullDate(timestamp)}</p>
          </div>
          <div className="col-5 col-sm-4 col-md-6 col-lg-6">
            <p className="p-temperature">{temperature}&deg;c</p>
          </div>
        </div>
        <div className="row justify-content-evenly">
          <div className="col-5 col-sm-4 col-md-6 col-lg-6">
            <img src={src} alt="description-icon" />
            <span className="description">{description}</span>
          </div>
          <div className="col-5 col-sm-4 col-md-6 col-lg-6">
            <p>Temp Min: {min_temp}&deg;c</p>
            <p>Temp Max: {max_temp}&deg;c</p>
          </div>
        </div>
      </div>
      <div className="lower">
        <div className="row align-items-center justify-content-evenly">
          <div className="col-3 col-sm-3 col-md-3 col-lg-3 lower_col1">
            <p>
              <b>Pressure:</b> {pressure}hPa
            </p>
            <p>
              <b>Humidity:</b> {humidity}%
            </p>
            <p>
              <b>Visibility:</b> {visibility / 1000}km
            </p>
          </div>

          <div className="col-3 col-sm-3 col-md-3 col-lg-3">
            <div className="separator-left"></div>
          </div>
          <div
            className="col-3 col-sm-3 col-md-3 col-lg-3"
            style={{ margin: "-25%" }}
          >
            <img src={arrowIcon} alt="arrow-icon" className="windIcon" />
            <p>
              {wind}m/s {deg} <b>Degree</b>
            </p>
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3">
            <div className="separator-right"></div>
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3 lower_col3">
            <p>
              <b>Sunrise:</b> {formatDate(sunrise)}
            </p>
            <p>
              <b>Sunset:</b> {formatDate(sunset)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
