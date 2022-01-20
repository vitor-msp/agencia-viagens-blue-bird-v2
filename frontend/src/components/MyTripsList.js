import { useSelector } from "react-redux";
import { MyTrip } from "./MyTrip";

export function MyTripsList() {
  const myTrips = useSelector((state) => state.myTrips);

  return (
    <div className="col-12 d-flex flex-row flex-wrap justify-content-around align-content-center w-100">
      {myTrips.map((myTrip) => (
        <MyTrip key={myTrip.id} myTrip={myTrip} />
      ))}
    </div>
  );
}
