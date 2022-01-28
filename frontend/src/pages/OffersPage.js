import { OffersList } from "../components/OffersList";

export function OffersPage() {
  return (
    <div className={"row p-0 m-0"}>
      <h1 className="display-6 mb-5"><strong>Promoções</strong></h1>
      <OffersList />
    </div>
  );
}
