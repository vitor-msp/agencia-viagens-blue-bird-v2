import { MyTripsList } from "../components/MyTripsList";

export function MyTripsPage() {
  return (
    <div className={"row p-0 m-0"}>
      <h1 className="display-6 mb-5"><strong>Minhas Viagens</strong></h1>
      <MyTripsList />
    </div>
  );
}
