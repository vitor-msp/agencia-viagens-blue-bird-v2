import { useDispatch, useSelector } from "react-redux";
import { updateModalTripContent } from "../store/actions/modalTripContent.actions";

export function MyTrip({ myPurchase }) {
  const { id, client, trip } = myPurchase;
  const myTrip = useSelector((state) => {
    return state.myTrips.find(({ id }) => id === trip);
  });
  const { defaultValue, departure, arrival } = myTrip;
  const destination = useSelector((state) => {
    return state.destinations.find(({ id }) => id === myTrip.destination);
  });
  const { city, uf, landingPlace } = destination;
  const offer = useSelector((state) => {
    return state.offers.find(({ id }) => id === myPurchase.offer);
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
        <strong>city: {city} - </strong>
        <strong>uf: {uf} - </strong>
        <strong>landingPlace: {landingPlace}</strong>
      </div>

      <div className="card-body text-primary">
        <p className="card-title">defaultValue: {defaultValue}</p>
        <p className="card-text">departure: {departure}</p>
        <p className="card-text">arrival: {arrival}</p>
        <hr />
        <p className="card-title">discount: {discount}</p>
        <p className="card-text">expiration: {expiration}</p>
      </div>

      <div className="card-footer bg-primary text-light d-flex">
        <span className="w-100 text-end">{}</span>
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={() => {
            dispatch(updateModalTripContent(myTrip, destination, offer, false, id));
          }}
        >
          Deletar
        </button>
      </div>
    </div>
  );
}
