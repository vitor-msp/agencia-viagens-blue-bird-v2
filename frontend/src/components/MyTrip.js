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

  const handleSelect = () => {
    dispatch(updateModalTripContent(myTrip, destination, offer, false, id));
  };

  return (
    <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header bg-primary text-light text-end">
        <span style={{ fontWeight: "600", fontSize: "1.2em" }}>
          {city} - {uf}
        </span>
      </div>

      <div className="card-body text-primary">
        <p className="card-text text-nowrap">
          <span style={{ fontWeight: "600" }}>Desembarque: </span>
          {landingPlace}
        </p>
        <p className="card-text">
          <span style={{ fontWeight: "600" }}>Partida: </span>
          {departure}
        </p>
        <p className="card-text">
          <span style={{ fontWeight: "600" }}>Chegada: </span>
          {arrival}
        </p>

        <div className="text-end">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleSelect}
          >
            Detalhes
          </button>
        </div>
      </div>

      <div className="card-footer bg-primary text-light d-flex">
        <span>Minha Viagem</span>
      </div>
    </div>
  );
}
