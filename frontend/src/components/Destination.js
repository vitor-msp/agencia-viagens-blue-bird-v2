import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getTrips } from "../store/actions/trips.actions";

export function Destination({ destination }) {
  const { id, city, uf, landingPlace } = destination;
  const dispatch = useDispatch();

  return (
    <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header bg-primary text-light">
        <strong>{city.toUpperCase()} - </strong>
        <strong>{uf.toUpperCase()}</strong>
      </div>

      <div className="card-body text-primary">
        <h5 className="card-title">{landingPlace}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <Link
          to={"/Viagens"}
          onClick={() => {
            dispatch(getTrips(id));
          }}
          className="btn btn-outline-primary"
        >
          Selecionar
        </Link>
      </div>

      <div className="card-footer bg-primary text-light d-flex">
        <span className="w-100 text-end">{landingPlace}</span>
      </div>
    </div>
  );
}
