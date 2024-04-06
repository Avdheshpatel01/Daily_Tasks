function inputDetails() {
  let name = document.getElementById("inputName").value;
  let rollNo = document.getElementById("inputRoll-no").value;

  document.getElementById("outputName").innerHTML = name;
  document.getElementById("outputRoll-no").innerHTML = rollNo;
}

function clicked() {
  let gujInt = document.getElementById("guj-int").value;
  let gujExt = document.getElementById("guj-ext").value;
  let mathsInt = document.getElementById("maths-int").value;
  let mathsExt = document.getElementById("maths-ext").value;
  let engInt = document.getElementById("eng-int").value;
  let engExt = document.getElementById("eng-ext").value;
  let sciInt = document.getElementById("sci-int").value;
  let sciExt = document.getElementById("sci-ext").value;
  let hindiInt = document.getElementById("hindi-int").value;
  let hindiExt = document.getElementById("hindi-ext").value;

  //   subject-wise total
  let gujTotal = (document.getElementById("guj-total").innerHTML =
    Number(gujInt) + Number(gujExt));
  let mathsTotal = (document.getElementById("maths-total").innerHTML =
    Number(mathsInt) + Number(mathsExt));
  let engTotal = (document.getElementById("eng-total").innerHTML =
    Number(engInt) + Number(engExt));
  let sciTotal = (document.getElementById("sci-total").innerHTML =
    Number(sciInt) + Number(sciExt));
  let hindiTotal = (document.getElementById("hindi-total").innerHTML =
    Number(hindiInt) + Number(hindiExt));

  //   all-subject total
  let overallTotal = (document.getElementById("overall-total").innerHTML =
    gujTotal + mathsTotal + engTotal + sciTotal + hindiTotal);

  //   internal-marks & external-marks total
  document.getElementById("int-total").innerHTML =
    Number(gujInt) +
    Number(mathsInt) +
    Number(engInt) +
    Number(sciInt) +
    Number(hindiInt);
  document.getElementById("ext-total").innerHTML =
    Number(gujExt) +
    Number(mathsExt) +
    Number(engExt) +
    Number(sciExt) +
    Number(hindiExt);

  //   calculation of percentages
  let calculationOfPercentages = (overallTotal * 100) / 500;
  let percentages = (document.getElementById(
    "percentages"
  ).innerHTML = `${calculationOfPercentages} %`);

  //   condition if the result is valid
  if (
    gujInt &&
    gujExt &&
    mathsInt &&
    mathsExt &&
    engInt &&
    engExt &&
    sciInt &&
    sciExt &&
    hindiInt &&
    hindiExt &&
    gujInt <= 30 &&
    gujExt <= 70 &&
    mathsInt <= 30 &&
    mathsExt <= 70 &&
    engInt <= 30 &&
    engExt <= 70 &&
    sciInt <= 30 &&
    sciExt <= 70 &&
    hindiInt <= 30 &&
    hindiExt <= 70 &&
    gujTotal >= 33 &&
    mathsTotal >= 33 &&
    engTotal >= 33 &&
    sciTotal >= 33 &&
    hindiTotal >= 33 &&
    calculationOfPercentages <= 100
  ) {
    document.getElementById("invalid-text").innerHTML = ``;
    document.getElementById("pass-fail").innerHTML = `Pass!`;
    document.getElementById("pass-fail").style.color = "white";
    document.getElementById("pass-fail").style.backgroundColor = "green";

    document.getElementById("overall-grade").innerHTML = "A1";
    if (calculationOfPercentages <= 90) {
      document.getElementById("overall-grade").innerHTML = "A2";
    }
    if (calculationOfPercentages <= 80) {
      document.getElementById("overall-grade").innerHTML = "B1";
    }
    if (calculationOfPercentages <= 70) {
      document.getElementById("overall-grade").innerHTML = "B2";
    }
    if (calculationOfPercentages <= 60) {
      document.getElementById("overall-grade").innerHTML = "C1";
    }
    if (calculationOfPercentages <= 50) {
      document.getElementById("overall-grade").innerHTML = "C2";
    }
    if (calculationOfPercentages <= 40) {
      document.getElementById("overall-grade").innerHTML = "D";
    }
  } else if (
    gujInt > 30 ||
    gujExt > 70 ||
    mathsInt > 30 ||
    mathsExt > 70 ||
    engInt > 30 ||
    engExt > 70 ||
    sciInt > 30 ||
    sciExt > 70 ||
    hindiInt > 30 ||
    hindiExt > 70 ||
    calculationOfPercentages > 100
  ) {
    document.getElementById("invalid-text").innerHTML = `Invalid!`;
    document.getElementById("invalid-text").style.color = "red";
    document.getElementById("pass-fail").innerHTML = ``;
    document.getElementById("pass-fail").style.backgroundColor = "transparent";
  } else {
    document.getElementById("invalid-text").innerHTML = ``;
    document.getElementById("invalid-text").style.color = "red";
    document.getElementById("pass-fail").innerHTML = `Fail!`;
    document.getElementById("pass-fail").style.color = "white";
    document.getElementById("pass-fail").style.backgroundColor = "red";

    if (calculationOfPercentages <= 32) {
      document.getElementById("overall-grade").innerHTML = "E1";
    }
    if (calculationOfPercentages <= 20) {
      document.getElementById("overall-grade").innerHTML = "E2";
    }
  }

  return false;
}
