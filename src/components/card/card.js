import "./card.css";

export default function Card(props) {
  const {
    id,
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
            <p>{timestamp}</p>
          </div>
          <div className="col">
            <h2>{temperature}&deg;c</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={src} alt="description-icon" />
            <span> {description}</span>
          </div>

          <div className="col">
            <p>Temp Min: {min_temp}&deg;c</p>
            <p>Temp Max: {max_temp}&deg;c</p>
          </div>
        </div>
      </div>
      <div className="lower">
        <div className="row">
          <div className="col text-start">
            <p>Pressure: {pressure}hPa</p>
            <p>Humidity: {humidity}%</p>
            <p>Visibility: {visibility / 1000}km</p>
          </div>
          <div className="col">
            {wind}m/s {deg} Degree
          </div>
          <div className="col text-end">
            <p>Sunrise: {sunrise}</p>
            <p>Sunset: {sunset}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
