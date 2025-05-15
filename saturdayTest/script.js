// document.getElementById("next").addEventListener("click", (e) => {
//     // history.forward();
//     window.history.forward();
//   });
const previousButton = document.getElementById("previous");
if (previousButton) {
  previousButton.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

const nextButton = document.getElementById("next");
if (nextButton) {
  nextButton.addEventListener("click", () => {
    window.location.href = "index2.html";
  });
}
