const express = require("express");
const app = express();
const pokemon = require("pokemon");
const { routers } = require("./config/routers");
const {
  createPokemonsByLang,
  createApiResponse,
  createCoinUrl,
  createLolUrl,
} = require("./utill/func");
const { keys } = require("./config/keys");

// 포켓몬 - 갯수, 언어
// 한국어로 랜덤 포켓몬 돌려줘라
app.get(routers.pokemon, (req, res) => {
  const { count, lang } = req.query;
  res.json(
    createApiResponse(200, "데이터 성공", createPokemonsByLang(count, lang))
  );
});

app.get(routers.weather, async (req, res) => {
  const { city } = req.query;

  const response = await fetch(createWeatherUrl(city), { method: "GET" });
  const result = await response.json();

  if (response.ok) {
    res.json(createApiResponse(200, "데이터 성공", result));
  } else {
    res.json(createApiResponse(400, "데이터 실패", "도시 없음"));
  }

  res.json(createApiResponse(200, "데이터 성공", result));
});

app.get(routers.coin, async (req, res) => {
  const { currency } = req.query;
  const response = await fetch(createCoinUrl(currency), { method: "GET" });
  const result = await response.json();
  if (response.ok) {
    res.json(createApiResponse(200, "데이터 성공", result));
  } else {
    res.json(createApiResponse(400, "데이터 실패", "코인 없음"));
  }
});

app.get(routers.lol, async (req, res) => {
  const response = await fetch(createLolUrl());
  const result = await response.json();
  if (response.ok) {
    res.json(createApiResponse(200, "데이터 성공", result));
  } else {
    res.json(createApiResponse(400, "데이터 실패", "코인 없음"));
  }
});

app.listen(3000, () => {
  console.log("서버");
});
