import { useNavigate } from "react-router";
import AddCity from "../../components/addcity/addCity";
import Card from "../../components/card/card";
import "./dashboard.css";

export default function Dashboard(props) {
  const weatherData = props.weatherData;
  const navigate = useNavigate();

  return (
    <>
      <AddCity />
      <div className="grid-container">
        {weatherData.map((item, key) => (
          <div onClick={() => navigate(`view/${key}`)}>
            <Card data={item} id={key} />
          </div>
        ))}
      </div>
    </>
  );
}
