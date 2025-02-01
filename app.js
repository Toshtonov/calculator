function appendToDisplay(value) {
    let display = document.getElementById("display");
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}
function clearDisplay() {
    document.getElementById("display").innerText = "0";
}
function backspace() {
    let display = document.getElementById("display");
    display.innerText = display.innerText.slice(0, -1);
    if (display.innerText === "") {
        display.innerText = "0";
    }
}
function calculate() {
    let display = document.getElementById("display");
    let expression = display.innerText.replace('%', '/100');

    if (expression.match(/[^0-9+\-*/.()%]/)) {
        alert("Calculator buzildi!");
    } else {
        display.innerText = eval(expression);
    }
}