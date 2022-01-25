import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCurrentOffer } from "../../store/actions/currentReq.actions";
import { showModalLogin } from "../../store/actions/modalLogin.actions";

export function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav class="row p-0 m-0 bg-primary">
      <div id="nav" class="col-6 col-lg-8 navbar navbar-expand-lg navbar-light">
        <div class="container-fluid justify-content-start">
          <button
            class="navbar-toggler my-2 my-lg-0 bg-transparent"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navToggler"
            aria-controls="navToggler"
            aria-expanded="false"
            aria-label="Menu de navegação"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <Link to={"/"} className="navbar-brand">
            Home
          </Link>
          <div class="collapse navbar-collapse" id="navToggler">
            <ul class="navbar-nav me-auto mb-lg-0">
              <li class="nav-item">
                <Link to={"/Home"} className="nav-link py-3 bg-transparent">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/Contato"} className="nav-link py-3 bg-transparent">
                  Contato
                </Link>
              </li>
              <li class="nav-item">
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
              <li class="nav-item">
                <Link
                  to={"/Promocoes"}
                  className="nav-link py-3 bg-transparent"
                >
                  Promoções
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to={"/Minhas_Viagens"}
                  className="nav-link py-3 bg-transparent"
                >
                  Minhas Viagens
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to={"/Minha_Conta"}
                  className="nav-link py-3 bg-transparent"
                >
                  Minha Conta
                </Link>
              </li>
              <li class="nav-item">
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
