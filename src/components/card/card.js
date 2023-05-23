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
          <div className="col-sm-4 col-md-6 col-lg-6">
            <h3>
              {city}, {country}
            </h3>
            <p>{formatFullDate(timestamp)}</p>
          </div>
          <div className="col-sm-4 col-md-6 col-lg-6">
            <h1>{temperature}&deg;c</h1>
          </div>
        </div>
        <div className="row justify-content-evenly">
          <div className="col-sm-4 col-md-6 col-lg-6">
            <img src={src} alt="description-icon" />
            <span className="description">{description}</span>
          </div>
          <div className="col-sm-4 col-md-6 col-lg-6">
            <h6>Temp Min: {min_temp}&deg;c</h6>
            <h6>Temp Max: {max_temp}&deg;c</h6>
          </div>
        </div>
      </div>
      <div className="lower">
        <div className="row align-items-center justify-content-evenly">
          <div className="col-12 col-sm-3 col-md-2 col-lg-3 lower_col1">
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

          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="separator-left"></div>
          </div>
          <div
            className="col-12 col-sm-3 col-md-3 col-lg-3"
            style={{ margin: "-25%" }}
          >
            <img src={arrowIcon} alt="arrow-icon" />
            <h6>
              {wind}m/s {deg} <b>Degree</b>
            </h6>
          </div>
          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="separator-right"></div>
          </div>
          <div className="col-12 col-sm-3 col-md-3 col-lg-3 lower_col3">
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
