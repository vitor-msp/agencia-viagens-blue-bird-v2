export const destinos = [
  {
    id: 1,
    cidade: "São Paulo",
    uf: "SP",
    locDesemb: "Aeroporto de Guarulhos",
  },
  {
    id: 2,
    cidade: "Rio de Janeiro",
    uf: "RJ",
    locDesemb: "Aeroporto do Galeão",
  },
  {
    id: 3,
    cidade: "Belo Horizonte",
    uf: "MG",
    locDesemb: "Aeroporto de Confins",
  },
  {
    id: 4,
    cidade: "Brasília",
    uf: "DF",
    locDesemb: "Aeroporto de Brasília",
  },
  {
    id: 5,
    cidade: "Salvador",
    uf: "BA",
    locDesemb: "Aeroporto de Salvador",
  },
  {
    id: 6,
    cidade: "Recife",
    uf: "PE",
    locDesemb: "Aeroporto de Recife",
  },
  {
    id: 7,
    cidade: "Fortaleza",
    uf: "CE",
    locDesemb: "Aeroporto de Fortaleza",
  },
];

const geraData = () => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
};

export const promocoes = [
  {
    id: 1,
    destino: 1,
    desconto: 0.5,
    vencimento: geraData(),
  },
  {
    id: 2,
    destino: null,
    desconto: 0.25,
    vencimento: geraData(),
  },
  {
    id: 3,
    destino: 6,
    desconto: 0.15,
    vencimento: geraData(),
  },
];

export const viagens = [
  {
    id: 1,
    destino: 3,
    partida: geraData(),
    chegada: geraData(),
    vlr_padrao: 210.0,
  },
  {
    id: 2,
    destino: 2,
    partida: geraData(),
    chegada: geraData(),
    vlr_padrao: 290.0,
  },
];

export const myDefaultTrips = [
  {
    id: 1,
    cliente: 1,
    viagem: 1,
    promocao: null,
  },
  {
    id: 2,
    cliente: 1,
    viagem: 2,
    promocao: 1,
  },
];
