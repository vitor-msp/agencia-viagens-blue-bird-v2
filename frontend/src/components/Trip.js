import { useDispatch, useSelector } from "react-redux";
import { updateModalTripContent } from "../store/actions/modalTripContent.actions";

export function Trip({ trip }) {
  const { departure, arrival, defaultValue } = trip;
  const destination = useSelector((state) => {
    return state.destinations.find(({ id }) => id === trip.destination);
  });
  const { city, uf, landingPlace } = destination;
  const offer = useSelector((state) => {
    return state.offers.find(({ id }) => {
      return id === state.currentReq.offer;
    });
  });
  const { discount, expiration } =
    offer === undefined
      ? {
          discount: 1,
          expiration: "-",
        }
      : offer;
  const dispatch = useDispatch();
  const handleSelect = () => {
    dispatch(updateModalTripContent(trip, destination, offer, true));
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

        <hr />

        {discount !== 1 && (
          <h5 className="card-title text-end">
            <span style={{ fontSize: "0.9em" }}>de</span> R$ {defaultValue},00{" "}
            <br />
          </h5>
        )}
        <h5 className="card-title text-end mb-4">
          por apenas
          <span style={{ fontSize: "1.5em" }}>
            {" "}
            R$ {defaultValue * discount},00{" "}
          </span>
        </h5>

        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handleSelect}
        >
          Selecionar
        </button>
      </div>

      <div className="card-footer bg-primary text-light d-flex">
        <span>Viagem</span>
      </div>
    </div>
  );
}
