import { MyTripsList } from "../components/MyTripsList";

export function MyTripsPage() {
  return (
    <div className={"row p-0 m-0"}>
      <h1>Minhas Viagens</h1>
      <p>Conteúdo da página Minhas Viagens</p>
      <MyTripsList />
    </div>
  );
}
