import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCurrentOffer } from "../../store/actions/currentReq.actions";
import { showModalLogin } from "../../store/actions/modalLogin.actions";
import { logout } from "../../store/actions/clientData.actions";
import { updateModalInfo } from "../../store/actions/modalInfo.actions";

export function Navbar() {
  const clientData = useSelector((state) => state.clientData);
  const dispatch = useDispatch();

  return (
    <nav className="row p-0 m-0 bg-primary">
      <div id="nav" className="col-12 navbar navbar-expand-lg navbar-light">
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
            </ul>

            <ul className="navbar-nav mb-lg-0">
              {clientData.name === null ? (
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
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      to={"/Minha_Conta"}
                      className="nav-link py-3 bg-transparent"
                    >
                      Minha Conta
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to={"/"}
                      onClick={() => {
                        dispatch(logout());
                        dispatch(
                          updateModalInfo("Você saiu da sua conta!!", false)
                        );
                      }}
                      className="nav-link py-3 bg-transparent btn"
                    >
                      Sair
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
