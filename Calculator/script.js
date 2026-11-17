const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let shouldResetScreen = false;
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const value = button.textContent;
    const operators = ["+", "-", "*", "/"];

    switch (value) {
      case "Dell":
        display.value = display.value.slice(0, -1);

        if (display.value === "") {
          display.value = "0";
        }
        break;

      case "Clear All":
        display.value = "0";
        break;

      case "=":
        display.value = eval(display.value);
        shouldResetScreen = true;
        break;

      default:
        if (shouldResetScreen) {
          if (operators.includes(value)) {
            shouldResetScreen = false;
            display.value += value;
          } else {
            display.value = value;
            shouldResetScreen = false;
          }
        } else if (display.value == "0") {
          display.value = value;
        } else {
          const lastChar = display.value.slice(-1);
          if (operators.includes(lastChar) && operators.includes(value)) {
            display.value = display.value.slice(0, -1) + value;
          } else {
            display.value += value;
          }
        }
        break;
    }
  });
});
