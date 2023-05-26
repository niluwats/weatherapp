import "./viewCard.css";
import colorsJson from "../../assets/colors.json";
import { useNavigate, useParams } from "react-router";
import { formatDate, formatFullDate } from "../../utils/formatDate";
import arrowIcon from "../../assets/arrowhead.png";

export default function ViewCard(props) {
  const { id } = useParams();
  const navigate = useNavigate();

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
  } = props.data[id];
  const src = `http://openweathermap.org/img/w/${icon}.png`;
  const colors = colorsJson.colours;

  return (
    <div
      className="text-center view_card_container"
      style={{ backgroundColor: colors[id % colors.length] }}
    >
      <div className="btn_container text-start">
        <button className="btn card_btn" onClick={() => navigate("/")}></button>
      </div>
      <div className="upper_container">
        <div className="row justify-content-evenly">
          <div className="col">
            <p className="p-city">
              {city}, {country}
            </p>
          </div>
        </div>
        <div className="row">
          <p>{formatFullDate(timestamp)}</p>
        </div>
        <div className="align-items-center upper_2">
          <div>
            <img src={src} alt="description-icon" />
            <br></br>
            <br></br>
            <p className="desc">{description}</p>
          </div>
          <div className="separator_container">
            <div className="separator" style={{ borderColor: "white" }}></div>
          </div>
          <div>
            <p className="p-temperature">{temperature}&deg;c</p>
            <br></br>
            <br></br>
            <p>Temp Min: {min_temp}&deg;c</p>
            <p>Temp Max: {max_temp}&deg;c</p>
          </div>
        </div>
      </div>
      <div className="lower_container">
        <div className="lower1">
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
        <div className="separator_container">
          <div className="separator"></div>
        </div>
        <div className="text-center">
          <img className="windIcon" src={arrowIcon} alt="arrow-icon" />
          <p>
            {wind}m/s {deg} <b>Degree</b>
          </p>
        </div>
        <div className="separator_container">
          <div className="separator"></div>
        </div>
        <div className="lower3">
          <p>
            <b>Sunrise:</b> {formatDate(sunrise)}
          </p>
          <p>
            <b>Sunset:</b> {formatDate(sunset)}
          </p>
        </div>
      </div>
    </div>
  );
}
