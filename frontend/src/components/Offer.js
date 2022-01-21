import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTrips } from "../store/actions/trips.actions";
import { updateCurrentOffer } from "../store/actions/currentReq.actions";

export function Offer({ offer }) {
  const { id, discount, expiration } = offer;
  const destination = useSelector((state) => {
    return state.destinations.find(({ id }) => id === offer.destination);
  });
  const testOffer = useSelector((state) => state.currentReq.offer);
  const { city, uf, landingPlace } =
    destination === undefined
      ? {
          city: "-",
          uf: "-",
          landingPlace: "-",
        }
      : destination;
  const dispatch = useDispatch();

  const handleSelect = () => {
    dispatch(getTrips(offer.destination, id));
    dispatch(updateCurrentOffer(id));
  };

  return (
    <div className="card border-primary mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-header bg-primary text-light">
        <strong>{discount} - </strong>
        <strong>{expiration}</strong>
      </div>

      <div className="card-body text-primary">
        <p className="card-title">{city}</p>
        <p className="card-title">{uf}</p>
        <p className="card-title">{landingPlace}</p>
        <Link
          to={offer.destination === null ? "/Destinos" : "/Viagens"}
          onClick={() => {
            offer.destination === null
              ? dispatch(updateCurrentOffer(id))
              : handleSelect();
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