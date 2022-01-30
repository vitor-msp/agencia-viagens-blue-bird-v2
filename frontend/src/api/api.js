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

export const getTrips = async (destination, offer) => {
  const res = await api.get(`/trips?d=${destination}&o=${offer}`);
  return res.data;
};

export const createClient = async (client) => {
  const res = await api.post(`/client`, client);
  return res.data;
};

export const login = async (client) => {
  const res = await api.post(`/login`, client);
  return res.data;
};
