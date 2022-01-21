import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPurchase } from "../store/actions/myPurchases.actions";
import { getMyTrip } from "../store/actions/myTrips.actions";

export function Trip({ trip }) {
  const { id, destination, departure, arrival, defaultValue } = trip;
  const { city, uf, landingPlace } = useSelector((state) => {
    return state.destinations.find(({ id }) => id === destination);
  });
  const offer = useSelector((state) => {
    return state.offers.find(({ id }) => {
      return id === state.currentReq.offer;
    });
  });
  const { discount, expiration } =
    offer === undefined
      ? {
          discount: "-",
          expiration: "-",
        }
      : offer;
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
        <hr />
        <p className="card-text">{discount}</p>
        <p className="card-text">{expiration}</p>
        <Link
          to={"/Minhas_Viagens"}
          onClick={() => {
            dispatch(getMyTrip(Object.assign({}, trip)));
            dispatch(getPurchase(id, offer === undefined ? null : offer.id));
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
