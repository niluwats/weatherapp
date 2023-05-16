import ViewCard from "../../components/viewCard/viewCard";
import "./view.css";

export default function View(props) {
  return (
    <div className="view_container">
      <ViewCard data={props.weatherData} />
    </div>
  );
}
