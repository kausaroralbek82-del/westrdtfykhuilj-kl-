const input = document.getElementById("textInput");
const texts = document.querySelectorAll(".hello");
const btnA = document.querySelector(".a");
const btnB = document.querySelector(".b");

input.addEventListener("input", () => {
  texts.forEach((el) => {
    el.textContent = input.value || "hello";
  });
});

btnA.addEventListener("click", () => {
  document.body.style.background = "white";
});

btnB.addEventListener("click", () => {
  document.body.style.background = "black";
});
