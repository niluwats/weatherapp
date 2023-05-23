import { useNavigate } from "react-router";
import AddCity from "../../components/addcity/addCity";
import Card from "../../components/card/card";
import "./dashboard.css";

export default function Dashboard(props) {
  const { weatherData } = props;
  const navigate = useNavigate();

  return (
    <>
      <AddCity />
      <div className="grid-container">
        {weatherData.map((item, index) => (
          <div key={item.id} onClick={() => navigate(`view/${index}`)}>
            <Card data={item} id={index} />
          </div>
        ))}
      </div>
    </>
  );
}
