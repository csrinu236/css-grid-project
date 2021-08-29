const numbers = [...document.querySelectorAll(".timeline-center .number")];
const years = [...document.querySelectorAll(".timeline-center h4")];
const year = new Date().getFullYear();

numbers.reverse();
window.addEventListener("load", function () {
  numbers.forEach((item, index) => {
    item.textContent = index + 1;
  });
  years.forEach((item, index) => {
    item.textContent = year - index;
  });
});
