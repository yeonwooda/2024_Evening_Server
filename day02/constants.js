const URL = {
  DOG: "/dog",
  CAT: "/cat",
  ICECREAM: "/icecream",
  BREAD: "/bread",
  CAFE: "/cafe",
  EXCHANGE: "/exchange",
  POKEMON: "/pokemon",
  WEATHER: "/weather",
};

const DATA = {
  DOG: [{ name: "흰둥이", bread: "진돗개" }],
  CAT: [
    { name: "샴", bread: "샴" },
    { name: "먼치킨", bread: "샴" },
    { name: "메인쿤", bread: "샴" },
  ],
  ICECREAM: [
    { name: "호두마루", price: 1000 },
    { name: "녹차마루", price: 1000 },
    { name: "체리마루", price: 1000 },
  ],
};

exports.CONSTANTS = {
  DOG: {
    URL: URL.DOG,
    DATA: DATA.DOG,
  },
  CAT: {
    URL: URL.CAT,
    DATA: DATA.CAT,
  },
  ICECREAM: {
    URL: URL.ICECREAM,
    DATA: DATA.ICECREAM,
  },
  BREAD: {
    URL: URL.BREAD,
  },
  CAFE: {
    URL: URL.CAFE,
  },
  EXCHANGE: {
    URL: URL.EXCHANGE,
  },
  POKEMON: {
    URL: URL.POKEMON,
  },
  WEATHER: {
    URL: URL.WEATHER,
  },
};

exports.MAP = {
  SIZE: {
    S: 1000,
    M: 1500,
    L: 2500,
  },
  NATION: {
    JAPAN: 0.11,
    USA: 0.0007,
    EURO: 0.00067,
  },
};

exports.API = "701420b7ae63f7a20ca28fcbf59a43cf";
