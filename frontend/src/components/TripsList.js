import { useSelector } from "react-redux";
import { Trip } from "./Trip";

export function TripsList() {
  const trips = useSelector((state) => state.trips);

  return (
    <div className="col-12 d-flex flex-row flex-wrap justify-content-around align-content-center">
      {trips.map((trip) => (
        <Trip key={trip.id} trip={trip} />
      ))}
    </div>
  );
}
