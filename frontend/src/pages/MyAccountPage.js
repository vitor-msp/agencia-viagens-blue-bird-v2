import { FormMyAccount } from "../components/forms/FormMyAccount";

export function MyAccountPage() {
  return (
    <div className={"row p-0 m-0"}>
      <h1 className="display-6 mb-5"><strong>Minha Conta</strong></h1>
      <FormMyAccount />
    </div>
  );
}
