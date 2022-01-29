import axios from "axios";

const port = 8080;

const api = axios.create({
  baseURL: `http://localhost:${port}/AgenciaViagens/`,
  headers: {
    "Content-type": "application/json",
  },
});

export async function getDestinations() {
  const res = await api.get(`/destinations`);
  return res.data;
}
