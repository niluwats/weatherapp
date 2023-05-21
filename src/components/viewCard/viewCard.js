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
  const colors = colorsJson.colours.map((clr) => clr);

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
            <h3>
              {city}, {country}
            </h3>
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
            <h5 className="desc">{description}</h5>
          </div>
          <div className="separator_container">
            <div className="separator" style={{ borderColor: "white" }}></div>
          </div>
          <div>
            <h1>{temperature}&deg;c</h1>
            <br></br>
            <br></br>
            <h6>Temp Min: {min_temp}&deg;c</h6>
            <h6>Temp Max: {max_temp}&deg;c</h6>
          </div>
        </div>
      </div>
      <div className="lower_container">
        <div className="lower1">
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
        <div className="separator_container">
          <div className="separator"></div>
        </div>
        <div className="text-center">
          <img src={arrowIcon} alt="arrow-icon" />
          <h6>
            {wind}m/s {deg} <b>Degree</b>
          </h6>
        </div>
        <div className="separator_container">
          <div className="separator"></div>
        </div>
        <div className="lower3">
          <h6>
            <b>Sunrise:</b> {formatDate(sunrise)}
          </h6>
          <h6>
            <b>Sunset:</b> {formatDate(sunset)}
          </h6>
        </div>
      </div>
    </div>
  );
}
