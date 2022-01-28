import React from "react";
import { FormContact } from "../components/forms/FormContact";

export function ContactPage() {
  return (
    <div className={"row p-0 m-0"}>
      <h1 className="display-6 mb-5">
        <strong>Contato</strong>
      </h1>
      <FormContact />
    </div>
  );
}
