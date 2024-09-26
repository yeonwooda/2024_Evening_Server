//require() [윈도우 한정]
//                        req 주인이 따따리 한테 요구 res가 따까리가 주인말 알아 멍금
// 따까리 : 소통방식  http[request-response] - get(가져오기), post(바꾸기)
// get 방식
// URL 쿼리 스트링
//->  /dog?age>5&gender=female

const express = require("express");
const pokemon = require("pokemon");
const { CONSTANTS, MAP, API } = require("./constants");
const { breadCalc, cafeCalc, exchangeCalc } = require("./func");

const app = express();
app.get(CONSTANTS.DOG.URL, (req, res) => {
  res.json(CONSTANTS.DOG.DATA);
});

// cat - 세마리 알아서 돌려주기
app.get(CONSTANTS.CAT.URL, (req, res) => {
  res.json(CONSTANTS.CAT.DATA);
});

// icecream - 호두마루, 녹차마루, 체리마루 + price
app.get(CONSTANTS.ICECREAM.URL, (req, res) => {
  res.json(CONSTANTS.ICECREAM.DATA);
});

// /bread 옵션 size = s,m,l & count =1
//http://localhost:3000/bread?count=10&size=l
app.get(CONSTANTS.BREAD.URL, (req, res) => {
  const { size, count } = req.query;
  res.json({ breadTotal: breadCalc(size, count) });
});

//http://localhost:3000/cafe?coffeePrice=5000&coffeeCount=3&cookiePrice=2000&cookieCount=3
app.get(CONSTANTS.CAFE.URL, (req, res) => {
  const { coffeePrice, coffeeCount, cookiePrice, cookieCount } = req.query;
  res.json({
    cafetotal: cafeCalc(coffeePrice, coffeeCount, cookiePrice, cookieCount),
  });
});

app.get(CONSTANTS.EXCHANGE.URL, (req, res) => {
  const { won, nation } = req.query;
  res.json({ exchangeResult: exchangeCalc(nation, won) });
});

app.get(CONSTANTS.POKEMON.URL, (req, res) => {
  const { count } = req.query;
  res.json({ pokemonList: makePokemonList(count) });
});

app.get(CONSTANTS.WEATHER.URL, (req, res) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Incheon&appid=${API}`;
  fetch(url, { method: "GET" })
    .then((v) => v.json())
    .then((v) => {
      res.json(v);
    });
});

app.listen(3000, () => {
  console.log("서버 시작함");
});
