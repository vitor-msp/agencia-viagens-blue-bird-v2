import { useSelector } from "react-redux";
import { Trip } from "./Trip";

export function TripsList() {
  const trips = useSelector((state) => {
    return state.trips.filter(({ destination }) => destination === state.currentReq.destination);
  });

  return (
    <div className="col-12 d-flex flex-row flex-wrap justify-content-around align-content-center w-100">
      {trips.map((trip) => (
        <Trip key={trip.id} trip={trip} />
      ))}
    </div>
  );
}
