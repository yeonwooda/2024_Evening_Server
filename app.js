//require() [윈도우 한정]
const express = require("express");
const app = express();

app.get("/dog", (req, res) => {
  res.json({ name: "흰둥이", bread: "진돗개" });
});

app.listen(3000, () => {
  console.log("서버 시작함");
});
2024_Evening_Server