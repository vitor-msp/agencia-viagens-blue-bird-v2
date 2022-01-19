import { useSelector } from "react-redux";
import { Destino } from "./Destino";

export function DestinosList() {
  const destinos = useSelector((state) => state.destinos);

  return (
    <div className="col-12 d-flex flex-row flex-wrap justify-content-around align-content-center w-100">
      {destinos.map((destino) => (
        <Destino key={destino.id} destino={destino} />
      ))}
    </div>
  );
}
