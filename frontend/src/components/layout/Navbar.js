import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCurrentOffer } from "../../store/actions/currentReq.actions";
import { showModalLogin } from "../../store/actions/modalLogin.actions";

export function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav className="row p-0 m-0 bg-primary">
      <div id="nav" className="col-6 col-lg-8 navbar navbar-expand-lg navbar-light">
        <div className="container-fluid justify-content-start">
          <button
            className="navbar-toggler my-2 my-lg-0 bg-transparent"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navToggler"
            aria-controls="navToggler"
            aria-expanded="false"
            aria-label="Menu de navegação"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link to={"/"} className="navbar-brand">
            Home
          </Link>
          <div className="collapse navbar-collapse" id="navToggler">
            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item">
                <Link to={"/Home"} className="nav-link py-3 bg-transparent">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/Contato"} className="nav-link py-3 bg-transparent">
                  Contato
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/Destinos"}
                  onClick={() => {
                    dispatch(clearCurrentOffer());
                  }}
                  className="nav-link py-3 bg-transparent"
                >
                  Destinos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/Promocoes"}
                  className="nav-link py-3 bg-transparent"
                >
                  Promoções
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/Minhas_Viagens"}
                  className="nav-link py-3 bg-transparent"
                >
                  Minhas Viagens
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/Minha_Conta"}
                  className="nav-link py-3 bg-transparent"
                >
                  Minha Conta
                </Link>
              </li>
              <li className="nav-item">
                <a
                  onClick={() => {
                    dispatch(showModalLogin(true));
                  }}
                  className="nav-link py-3 bg-transparent btn"
                >
                  Acessar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
