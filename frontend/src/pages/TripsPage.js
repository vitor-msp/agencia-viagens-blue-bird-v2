import { TripsList } from "../components/TripsList";

export function TripsPage() {
  return (
    <div className={"row p-0 m-0"}>
      <h1 className="display-6 mb-5"><strong>Viagens</strong></h1>
      <TripsList />
    </div>
  );
}
