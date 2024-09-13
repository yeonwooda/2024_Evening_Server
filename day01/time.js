setTimeout(() => {}, 1000);

//btn 태그 만들고 [엄준식]버튼 => 클릭하면 => 3초뒤에 살아있다.

// const button = document.createElement("button");
// button.innerText = "엄준식";

// button.addEventListener("click", () => {
//   setTimeout(() => {
//     button.innerText = "살아있다";
//   }, 3000);
// });

// document.body.appendChild(button);

// 클릭하면 이모지

// const button = document.createElement("button");
// button.innerText = "🥚";

// button.addEventListener("click", () => {
//   setTimeout(() => {
//     button.innerText = "🐣";
//     setTimeout(() => {
//       button.innerText = "🐥";
//     }, 1000);
//   }, 1000);
// });

// document.body.appendChild(button);

// //🐥🐤🐓🍗

// 1초마다 증가해
// setInterval(() => {
//   console.log("엄준식 살아있다");
// }, 1000);

setInterval(() => {
  const date = new Date(); // 밖에 있을 땐 시간이 새롭게 생성이 x 안에다가 작성
  const dateTag = document.querySelector(".date");
  dateTag.innerText = date.toLocaleString();
}, 1000);

// const h1 = document.createElement("h1");

// setInterval(() => {
//   const date = new Date();
//   h1.innerText = data.toLocaleString();
// }, 1000);

// document.body.appendChild(h1);

const div = document.createElement("div");
document.body.appendChild(div);

setInterval(() => {
  const [time] = new Date().toLocaleString().split(" ");
  div.innerText = time[4];
}, 1000);
