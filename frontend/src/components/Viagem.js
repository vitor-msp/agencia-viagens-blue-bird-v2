import { Link } from "react-router-dom";

export function Viagem({viagem}) {
  const {destino, partida, chegada, vlr_padrao} = viagem;

  return (
    <div className="card border-primary mb-3" style={{maxWidth: "18rem"}}>
        <div className="card-header bg-primary text-light">
          <strong>{destino} - </strong>
          <strong>{}teste</strong>
        </div>

        <div className="card-body text-primary">
          <h5 className="card-title">{vlr_padrao}</h5>
          <p className="card-text">{partida}</p>
          <p className="card-text">{chegada}</p>
          <Link to={"/Home"} className="btn btn-outline-primary">Selecionar</Link>
        </div>

        <div className="card-footer bg-primary text-light d-flex">
          <span className="w-100 text-end">{}teste</span>
        </div>
    </div>
  );
}