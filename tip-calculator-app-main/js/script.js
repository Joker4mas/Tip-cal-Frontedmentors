const bill = document.querySelector("#inputx");
const noOfPeople = document.querySelector("#inputx2");
const tips = document.querySelectorAll(".tips");
const tipAmount = document.querySelector("#calvalue-1");
const total = document.querySelector("#calvalue-2");
const reset = document.querySelector(".reset-btn");

const calculateTip = () => {
  const billValue = parseInt(bill.value);
  const peopleValue = noOfPeople.value == "" ? 1 : parseInt(noOfPeople.value);
  const tipPercent = Array.from(tips).filter((a) => {
    return a.classList.contains("active");
  });

  if (tipPercent.length !== 0) {
    const converted = parseInt(tipPercent[0].textContent.replace("%", ""));

    tipAmount.textContent = `$${(
      ((converted / 100) * billValue) /
      peopleValue
    ).toFixed(2)}`;
  }
  const totalPerPerson =
    billValue / peopleValue +
    parseFloat(tipAmount.textContent.replace("$", ""));
  total.textContent = `$${totalPerPerson.toFixed(2)}`;
};

bill.addEventListener("input", () => {
  if (bill.value == "") {
    tipAmount.textContent = "$0.00";
    total.textContent = "$0.00";
  } else {
    calculateTip();
  }
});

tips.forEach((tip) => {
  tip.addEventListener("click", () => {
    tips.forEach((tip) => tip.classList.remove("active"));
    tip.classList.add("active");

    if (bill.value == "") {
      tipAmount.textContent = "$0.00";
      total.textContent = "$0.00";
    } else {
      calculateTip();
    }
  });
});

noOfPeople.addEventListener("input", () => {
  if (bill.value == "") {
    tipAmount.textContent = "$0.00";
    total.textContent = "$0.00";
  } else {
    calculateTip();
  }
});

reset.addEventListener("click", () => {
  bill.value = "";
  noOfPeople.value = "";
  tips.forEach((tip) => tip.classList.remove("active"));
  tipAmount.textContent = "$0.00";
  total.textContent = "$0.00";
});
