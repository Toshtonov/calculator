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
    try {
        display.innerText = eval(display.innerText.replace('%', '/100'));
    } catch {
        alert ("Calculator buzildi!")

    }
}