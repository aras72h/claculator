function calculate() {
    // Get input values from html
    const x = Number(document.getElementById("input0").value);
    const y = Number(document.getElementById("input1").value);
    const operator = document.getElementById("operator").value;
    // Handle different math operations
    if (operator == '+') {
        document.getElementById("output").innerHTML = `${x + y}`;
    }
    else if (operator == '-') {
        document.getElementById("output").innerHTML = `${x - y}`;
    }
    else if (operator == '*') {
        document.getElementById("output").innerHTML = `${x * y}`;
    }
    else if (operator == '/') {
        document.getElementById("output").innerHTML = `${x / y}`;
    }
}