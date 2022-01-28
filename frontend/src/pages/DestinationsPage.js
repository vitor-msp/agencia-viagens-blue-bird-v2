import { DestinationsList } from "../components/DestinationsList";

export function DestinationsPage() {
  return (
    <div className={"row p-0 m-0"}>
      <h1 className="display-6 mb-5">
        <strong>Destinos</strong>
      </h1>
      <DestinationsList />
    </div>
  );
}
