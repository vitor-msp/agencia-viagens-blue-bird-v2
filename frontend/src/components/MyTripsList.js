import { useSelector } from "react-redux";
import { MyTrip } from "./MyTrip";

export function MyTripsList() {
  const myPurchases = useSelector((state) => state.myPurchases);

  return (
    <div className="col-12 d-flex flex-row flex-wrap justify-content-around align-content-center">
      {myPurchases.map((myPurchase) => (
        <MyTrip key={myPurchase.id} myPurchase={myPurchase} />
      ))}
    </div>
  );
}
