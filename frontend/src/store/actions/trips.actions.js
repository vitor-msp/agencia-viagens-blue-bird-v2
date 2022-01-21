import { trips } from "../tests";

// export const updateAllTrips = (trips) => {
//   return {
//     type: "updateAllTrips",
//     payload: trips,
//   };
// };
export const getTrips = (destinationId, offer = null, tripsTemp = trips) => {
  //tripsTemp é apenas p executar logica no front, será removido qnd implementar api
  return {
    type: "getTrips",
    payload: tripsTemp.filter(({destination}) => destination === destinationId),
    //comparação de datas p filtrar viagens tbm por promoção 
    //get viagens(id_destino, id_promo?) api
  };
};
