// import { trips } from "../tests";
import { reqTrips } from "../../api/api";

// export const updateAllTrips = (trips) => {
//   return {
//     type: "updateAllTrips",
//     payload: trips,
//   };
// };
export const getTrips = async (
  destinationId,
  offer = null,
  tripsTemp = []
) => {
  //tripsTemp é apenas p executar logica no front, será removido qnd implementar api

  const trips = await reqTrips(destinationId);
  return {
    type: "getTrips",
    payload: trips,
    // payload: tripsTemp.filter(({destination}) => destination === destinationId),
    //comparação de datas p filtrar viagens tbm por promoção
    //get viagens(id_destino, id_promo?) api
  };
};
