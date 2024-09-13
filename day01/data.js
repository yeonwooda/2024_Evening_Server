// fetch

// fetch("https://fakerapi.it/api/v2/books?_quantity=1").then((v) => v.JSON(v).than(v)=> console.log(v));

// const but = document.createElement("button");
// but.innerText = "데이터 가져오기";
// but.addEventListener("click", () => {
//   setTimeout(() => {
//     but.innerText = "3";
//   }, 1000);
// });

// document.body.appendChild(but);

// fetch("https://fakerapi.it/api/v2/creditCards?_quantity=10")
//   .then((v) => v.json())
//   .then((data) => console.log(data));

button.addEventListener("click", () => {
  setTimeout(() => {
    button.innerText = "살아있다";
  }, 3000);
});
document.body.appendChild(button);
