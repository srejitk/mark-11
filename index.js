const birthdayDate = document.querySelector("#birthday-input");
const luckyNumber = document.querySelector("#lucky-number");
const check_button = document.querySelector("#check-button");
const output_msg = document.querySelector("#output-msg");

check_button.addEventListener("click", function printBday() {
  validateBirthdate(birthdayDate, luckyNumber);
});

function validateBirthdate(date, number) {
  let birthDate = date.value;
  let lucky_Number = number.value;
  let sum = 0;
  birthDate = birthDate.replaceAll("-", "0");

  for (let i = 0; i < birthDate.length; i++) {
    sum += Number(birthDate[i]);
  }
  if (sum && lucky_Number) {
    checkIfLucky(lucky_Number, sum);
  } else {
    output_msg.innerText = "Please Enter Valid Values";
  }

  function checkIfLucky(number, sum) {
    if (sum % lucky_Number === 0) {
      output_msg.innerText = "Congratulations! You're Birthday is lucky!";
    } else {
      output_msg.innerText = "Uh-Oh! You're Birthday not is lucky!";
    }
  }
}
