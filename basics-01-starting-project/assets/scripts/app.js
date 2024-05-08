const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Function Definition: getUserNumberInput() {} : use for getting user input number
// Get user input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Function Definition: createAndWriteOutput() {} : use for getting user input number
// create and write output log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

// write object log of every operation in console
function writeToLog(
  operationIndetifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIndetifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  // adds each object to array
  logEntries.push(logEntry);
  console.log(logEntries);
}

// function calclate results based on condition
function calculateResult(calculationType) {
  // if (
  //   calculationType !== 'ADD' && 
  //   calculationType !== 'SUBTRACT' && 
  //   calculationType !== 'MULTIPLY' && 
  //   calculationType !== 'DIVIDE') 
  // {
  //  return;
  // }

  if (
    calculationType === 'ADD' || 
    calculationType === 'SUBTRACT' || 
    calculationType === 'MULTIPLY' ||
    calculationType === 'DIVIDE'
  ) {
    const enteredNumber = getUserNumberInput();
    // const calculationDescription = `${currentResult} + ${enteredNumber}`;
    const initialResult = currentResult;
    // operator used in calculation description
    let mathOperator;
    if (calculationType === "ADD") {
      currentResult  += enteredNumber;
      mathOperator = '+';
    } 
    else if (calculationType === "SUBTRACT")  {
        currentResult -= enteredNumber;
        mathOperator = '-';
      
    }
    else if (calculationType === "MULTIPLY") {
      currentResult *= enteredNumber;
      mathOperator = '*';
    }
    else if (calculationType === "DIVIDE") {
      currentResult /= enteredNumber;
      mathOperator = '/';
    }
    
    
    // outputResult(currentResult, calculationDescription);
    createAndWriteOutput(mathOperator,initialResult,enteredNumber);
    // function containing object containing operation data
    writeToLog(calculationType,initialResult,enteredNumber,currentResult);

  }
 
}

function add() {
  calculateResult("ADD");
}

function subtract() { 
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}

/*
// Function Definition: add() {}
//  adds two numbers and displays calulation results
function add() {
  const enteredNumber = getUserNumberInput();
  // const calculationDescription = `${currentResult} + ${enteredNumber}`;
  const initialResult = currentResult;
  currentResult  += enteredNumber;
  // outputResult(currentResult, calculationDescription);
  createAndWriteOutput('+',initialResult,enteredNumber);
  // function containing object containing operation data
  writeToLog('ADD',initialResult,enteredNumber,currentResult);
}



// Function Definition: subtract() {}
//  subsracts two numbers and displays calulation results
function subtract() {
  const enteredNumber = getUserNumberInput();
  // const calculationDescription = `${currentResult} + ${enteredNumber}`;
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  // outputResult(currentResult, calculationDescription);
  createAndWriteOutput('-',initialResult,enteredNumber);
  // function containing object containing operation data
  writeToLog('SUBTRACT',initialResult,enteredNumber,currentResult);
}



// Function Definition: multiply() {}
// multiplies two numbers and displays calulation results
function multiply() {
  const enteredNumber = getUserNumberInput();
  // const calculationDescription = `${currentResult} + ${enteredNumber}`;
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  // outputResult(currentResult, calculationDescription);
  createAndWriteOutput('*',initialResult,enteredNumber);
  // function containing object containing operation data
  writeToLog('MULTIPLY',initialResult,enteredNumber,currentResult);
}




// Function Definition: divide() {}
//  divides two numbers and displays calulation results
function divide() {
  const enteredNumber = getUserNumberInput();
  // const calculationDescription = `${currentResult} + ${enteredNumber}`;
  const initialResult = currentResult;
  currentResult  /= enteredNumber;
  // outputResult(currentResult, calculationDescription);
  createAndWriteOutput('/',initialResult,enteredNumber);
  // function containing object containing operation data
  writeToLog('DIVIDE',initialResult,enteredNumber,currentResult);
}
*/


// event listener connected to button elements
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);



// currentResult = (currentResult + 10) * 3 / 2 -1;

// let calculationDescription = `( + ${defaultResult} + '+ 10) * 3 / 2 -1`;


