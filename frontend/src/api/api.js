import axios from "axios";

const port = 8080;

const api = axios.create({
  baseURL: `http://localhost:${port}/AgenciaViagens/`,
  headers: {
    "Content-type": "application/json",
  },
});

export const getDestinations = async () => {
  const res = await api.get(`/destinations`);
  return res.data;
};

export const getOffers = async () => {
  const res = await api.get(`/offers`);
  return res.data.map((offer) => {
    return {
      ...offer,
      ["destination"]: offer.destination === 0 ? null : offer.destination,
    };
  });
};

export const reqTrips = async (destinationId) => {
  const res = await api.get(`/trips?d=${destinationId}`);
  console.table(res.data);
  alert("teste");
  return res.data;
};
