import React from "react";

export const Footer = () => {
  return (
    <footer class="row bg-primary text-center text-light d-flex flex-column w-100 p-0 m-0" style={{position:"absolute",bottom:"0px"}}>
        <span>&copy; {(new Date()).getFullYear()} - BlueBird Viagens</span>
        <span>Recode Pro - 2021</span>
        <span>Projeto Agência de Viagens - Módulo 4</span>
        <span>Desenvolvedor: Vítor Mateus Santos Parreiras</span>
        <address>
            <span>Contato:</span> <a class="text-light" href="mailto:vitor7jan@gmail.com">vitor7jan@gmail.com</a>
        </address>
    </footer>
  );
};
