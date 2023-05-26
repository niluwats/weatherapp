import "./addCity.css";

export default function AddCity() {
  return (
    <div className="outer">
      <input type="text" placeholder="    Enter a city" />
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <button
            style={{ backgroundColor: "#6c5dd3", color: "white" }}
            className="btn button"
          >
            Add City
          </button>
        </div>
      </div>
    </div>
  );
}
