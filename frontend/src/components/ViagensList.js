import { useSelector } from "react-redux";
import { Viagem } from "./Viagem";

export function ViagensList() {
  const viagens = useSelector((state) =>
    state.viagens.filter((viagem) => viagem.destino === 2)
  );

  return (
    <div className="col-12 d-flex flex-row flex-wrap justify-content-around align-content-center w-100">
      {viagens.map((viagem) => (
        <Viagem key={viagem.id} viagem={viagem} />
      ))}
    </div>
  );
}
