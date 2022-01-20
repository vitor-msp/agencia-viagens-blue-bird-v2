import { useSelector } from "react-redux";

export function MyTrip({ myTrip }) {
  const { id, client, trip, sale } = myTrip;
  const { destination, defaultValue, departure, arrival } = useSelector(
    (state) => {
      return state.trips.find(({ id }) => id === myTrip.trip);
    }
  );
  const { city, uf, landingPlace } = useSelector((state) => {
    return state.destinations.find(({ id }) => id === destination);
  });

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
      </div>

      <div className="card-footer bg-primary text-light d-flex">
        <span className="w-100 text-end">{}</span>
      </div>
    </div>
  );
}
