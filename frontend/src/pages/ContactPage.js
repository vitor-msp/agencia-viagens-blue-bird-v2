import React from "react";
import { FormContact } from "../components/forms/FormContact";

export function ContactPage() {
  return (
    <div className={"row p-0 m-0"}>
      <h1>Contato</h1>
      <p>Conteúdo da página Contato</p>
      <FormContact />
    </div>
  );
}
