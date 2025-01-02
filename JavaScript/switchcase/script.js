function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  let result;
  let operation;

  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("ans").textContent = "Please enter valid numbers";
    return;
  }

  switch (operator) {
    case "+":
      result = num1 + num2;
      operation = "Addition";
      break;
    case "-":
      result = num1 - num2;
      operation = "Subtraction";
      break;
    case "*":
      result = num1 * num2;
      operation = "Multiplication";
      break;
    case "/":
      if (num2 === 0) {
        document.getElementById("ans").textContent = "Cannot divide by zero";
        return;
      }
      result = num1 / num2;
      operation = "Division";
      break;
    case "%":
      result = num1 % num2;
      operation = "Modulus";
      break;
    default:
      document.getElementById("ans").textContent = "Invalid Operator";
      return;
  }

  document.getElementById(
    "ans"
  ).textContent = `The ${operation} is: ${result.toFixed(2)}`;
}
