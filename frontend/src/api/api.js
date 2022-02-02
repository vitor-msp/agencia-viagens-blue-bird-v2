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
  console.log(res.data);
  return res.data;
};

export const getOffers = async () => {
  const res = await api.get(`/offers`);
  console.log(res.data);
  return res.data.map((offer) => {
    return {
      ...offer,
      destination: {
        id: offer.destination.id === 0 ? null : offer.destination.id,
      },
    };
  });
};

export const getTrips = async (destination, offer) => {
  const res = await api.get(`/trips?d=${destination}&o=${offer}`);
  console.log(res.data);
  return res.data;
};

export const createClient = async (client) => {
  const res = await api.post(`/client`, client);
  console.log(res.data);
  return res.data;
};

export const updateClient = async (client) => {
  const res = await api.put(`/client`, client);
  console.log(res.data);
  return res.data;
};

export const login = async (client) => {
  const res = await api.post(`/login`, client);
  console.log(res.data);
  return res.data;
};

export const setPassword = async (client) => {
  const res = await api.post(`/setPassword`, client);
  console.log(res.data);
  return res.data;
};

export const postPurchase = async (purchaseToPost) => {
  const res = await api.post(`/postPurchase`, purchaseToPost);
  console.log(res.data);
  return res.data;
};

export const getPurchases = async (client) => {
  const res = await api.post(`/getPurchases`, client);
  console.log(res.data);
  return res.data;
};

export const deletePurchase = async (purchaseToDelete) => {
  const res = await api.post(`/deletePurchase`, purchaseToDelete);
  console.log(res.data);
  return res.data;
};
