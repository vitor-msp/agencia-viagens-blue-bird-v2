import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTrip } from "../store/actions/myTrips.actions";

export function Trip({ trip }) {
  const { id, destination, departure, arrival, defaultValue } = trip;
  const { city, uf, landingPlace } = useSelector((state) => {
    return state.destinations.find(({ id }) => id === destination);
  });
  const dispatch = useDispatch();

  return (
    <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header bg-primary text-light">
        <strong>{city} - </strong>
        <strong>{uf} - </strong>
        <strong>{landingPlace}</strong>
      </div>

      <div className="card-body text-primary">
        <h5 className="card-title">{defaultValue}</h5>
        <p className="card-text">{departure}</p>
        <p className="card-text">{arrival}</p>
        <Link
          to={"/Minhas_Viagens"}
          onClick={() => {
            dispatch(getTrip(id));
          }}
          className="btn btn-outline-primary"
        >
          Selecionar
        </Link>
      </div>

      <div className="card-footer bg-primary text-light d-flex">
        <span className="w-100 text-end">{}teste</span>
      </div>
    </div>
  );
}
