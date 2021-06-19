import "./styles.css";

let firstNum = document.getElementById("firstNum");
let secondNum = document.getElementById("secondNum");
let randomCount = document.getElementById("randomCount");
let generateButton = document.getElementById("generateBtn");
let numberContainer = document.getElementById("numberContainer");

let firstValue = 0;
let secondValue = 0;
let results = [];

let generateNumber = () => {
  console.log("gg");

  results = [];
  // resultString = "";

  let randomCountValue = Math.floor(randomCount.value);
  let min = Math.ceil(firstNum.value); // 2
  let max = Math.floor(secondNum.value); // 10

  for (let i = 0; i < randomCountValue; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    results.push(randomNumber);
  }

  numberContainer.innerHTML = results;

  console.log(results);
};

let onFirstNumChanged = (e) => {
  console.log("First Value Changed");
  if (secondNum.value.length > 0 && e.target.value > secondNum.value) {
    firstNum.value = firstValue;
    numberContainer.innerHTML = "最小值不可大於最大值";
  } else {
    firstValue = e.target.value;
    numberContainer.innerHTML = "";
  }
};

let onSecondNumChanged = (e) => {
  console.log("Second Value Changed");
  if (firstNum.value.length > 0 && e.target.value < firstNum.value) {
    secondNum.value = secondValue;
    numberContainer.innerHTML = "最大值不可小於最小值";
  } else {
    secondValue = e.target.value;
    numberContainer.innerHTML = "";
  }
};

let randomCountChanged = (e) => {
  console.log("Changed");
  console.log(e.target.value);
};

generateButton.onclick = generateNumber;
firstNum.onchange = onFirstNumChanged;
secondNum.onchange = onSecondNumChanged;
randomCount.onchange = randomCountChanged;
