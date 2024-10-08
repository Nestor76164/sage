/* script.js

const paymentBtn = document.getElementById("paymentBtn");
const overlay = document.querySelector(".overlay");
const paymentForm = document.querySelector(".payment-form");
const closeBtn = document.getElementById("closeBtn");

paymentBtn.addEventListener("click", () => {
  overlay.style.display = "block";
  paymentForm.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
  paymentForm.style.display = "none";
});*/