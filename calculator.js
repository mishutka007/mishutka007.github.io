let result = document.getElementById("zzzz");
let qrrentSine = null;
let calculate = (number) => {
  if (
    (result.value.length === 1 || result.value.length === 0) &&
    number === "."
  ) {
    number = "0.";
  }
  if (result.value.length === 1 && ["+", "-", "/", "*"].includes(number)) {
    return;
  }
  if (!qrrentSine && ["+", "-", "/", "*"].includes(number)) {
    qrrentSine = number;
    result.value += number;
    return;
  }
  if (number == ".") {
    if (check("+") || check("-") || check("/") || check("*")) {
      const numbers = result.value.split(qrrentSine);
      if (numbers[1].includes(".")) {
        return;
      }
    } else {
      if (result.value.includes(".")) {
        return;
      }
    }
  }
  if (
    (check("+") || check("-") || check("/") || check("*")) &&
    ["+", "-", "/", "*"].includes(number)
  ) {
    return;
  }
  result.value += number;
};
let SUM = () => {
  try {
    result.value = eval(result.value);
    qrrentSine = null;
  } catch (err) {
    alert("Передумай!");
  }
};
function del() {
  result.value = " ";
  qrrentSine = null;
}
function check(param) {
  return result.value.includes(param);
}
