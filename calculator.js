let result = document.getElementById("zzzz");
let calculate = (number) => {
  if (result.value.length === 1 && number === ".") {
    number = "0.";
  }
  result.value += number;
};
let SUM = () => {
  try {
    result.value = eval(result.value);
  } catch (err) {
    alert("Передумай!");
  }
};
function del() {
  result.value = " ";
}
