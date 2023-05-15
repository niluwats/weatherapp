import "./addCity.css";

export default function AddCity() {
  return (
    <div className="outer">
      <input type="text" placeholder="    Enter a city" />
      <button
        style={{ backgroundColor: "#6c5dd3", color: "white" }}
        className="btn button"
      >
        Add City
      </button>
    </div>
  );
}
