const { MAP } = require("./constants.js");

exports.breadCalc = (size, count) =>
  MAP.SIZE[size.toUpperCase()] * Number(count);
exports.cafeCalc = (coffeePrice, coffeeCount, cookiePrice, cookieCount) =>
  Number(coffeePrice) * Number(coffeeCount) +
  Number(cookiePrice) * Number(cookieCount);
// exports.exchangeCalc() = ( won, nation ) => MAP.NATION[nation] * Number(won);
exports.makePokemonList = (count) =>
  Array(Number(count))
    .fill(0)
    .map((v) => ({ name: pokemon.random("ko") }));
