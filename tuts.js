let color = "blue"; // This is a global variable

function printColor() {
    let color = "green"; // This is a local variable that shadows the global variable
    console.log(color); // Outputs: "green"
}

printColor(); // Calls the function, which will use the local 'color'
console.log(color); // Outputs: "blue", as the global 'color' remains unchanged
