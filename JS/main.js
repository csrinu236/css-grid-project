const numbers = [...document.querySelectorAll(".timeline-center .number")];
const years = [...document.querySelectorAll(".timeline-center h4")];
const date = document.getElementById("date");

const year = new Date().getFullYear();
date.textContent = year;
numbers.reverse();

window.addEventListener("load", function () {
  numbers.forEach((item, index) => {
    item.textContent = index + 1;
  });
  years.forEach((item, index) => {
    item.textContent = year - index;
  });
});
