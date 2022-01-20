export const destinations = [
  {
    id: 1,
    city: "São Paulo",
    uf: "SP",
    landingPlace: "Aeroporto de Guarulhos",
  },
  {
    id: 2,
    city: "Rio de Janeiro",
    uf: "RJ",
    landingPlace: "Aeroporto do Galeão",
  },
  {
    id: 3,
    city: "Belo Horizonte",
    uf: "MG",
    landingPlace: "Aeroporto de Confins",
  },
  {
    id: 4,
    city: "Brasília",
    uf: "DF",
    landingPlace: "Aeroporto de Brasília",
  },
  {
    id: 5,
    city: "Salvador",
    uf: "BA",
    landingPlace: "Aeroporto de Salvador",
  },
  {
    id: 6,
    city: "Recife",
    uf: "PE",
    landingPlace: "Aeroporto de Recife",
  },
  {
    id: 7,
    city: "Fortaleza",
    uf: "CE",
    landingPlace: "Aeroporto de Fortaleza",
  },
];

const generateDate = () => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
};

export const sales = [
  {
    id: 1,
    destination: 1,
    discount: 0.5,
    expiration: generateDate(),
  },
  {
    id: 2,
    destination: null,
    discount: 0.25,
    expiration: generateDate(),
  },
  {
    id: 3,
    destination: 6,
    discount: 0.15,
    expiration: generateDate(),
  },
];

export const trips = [
  {
    id: 1,
    destination: 3,
    departure: generateDate(),
    arrival: generateDate(),
    defaultValue: 210.0,
  },
  {
    id: 2,
    destination: 2,
    departure: generateDate(),
    arrival: generateDate(),
    defaultValue: 290.0,
  },
];

export const myTrips = [
  {
    id: 1,
    client: 1,
    trip: 1,
    sale: null,
  },
  {
    id: 2,
    client: 1,
    trip: 2,
    sale: 1,
  },
];
