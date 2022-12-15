const billAmount = document.getElementById("bill");
const pplAmount = document.getElementById("people");

const tipPer = document.querySelector(".tip-amount");
const totalPer = document.querySelector(".total-amount");
const custom = document.getElementById("custom");
const cells = Array.from(document.querySelectorAll(".cell"));
const wrong1 = document.querySelector(".wrong-1");
const wrong2 = document.querySelector(".wrong-2");
let percentStr;

function reset() {
  location.reload();
}

function changeColor(elem) {
  checkInput();
  cells.forEach((el) => (el.style.background = "var(--green"));
  elem.style.background = "var(--cyan)";
  percentStr = elem.textContent;

  let percent = parseInt(percentStr);
  calcTip(percent);
}

function customise() {
  custom.addEventListener("keyup", function () {
    checkInput();
    percentStr = custom.value;

    let percent = Number(percentStr);
    calcTip(percent);
  });
}

function calcTip(percent) {
  let tipSingle = ((billAmount.value / 100) * percent) / pplAmount.value;

  let totalSingle =
    (Number(billAmount.value) + (billAmount.value / 100) * percent) /
    pplAmount.value;
  tipPer.textContent = "$" + tipSingle.toFixed(2);
  totalPer.textContent = "$" + totalSingle.toFixed(2);
}
function checkInput() {
  if (Number(pplAmount.value) === 0) {
    wrong2.style.display = "block";
  }
  if (Number(billAmount.value) === 0) {
    wrong1.style.display = "block";
  }
}
