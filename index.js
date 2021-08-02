const birthdayDate = document.querySelector("#birthday-input");
const luckyNumber = document.querySelector("#lucky-number");
const check_button = document.querySelector("#check-button");

check_button.addEventListener("click", function printBday() {
  console.log(birthdayDate.value, luckyNumber.value);
});
