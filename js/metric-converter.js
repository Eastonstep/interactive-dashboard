let convertButton = document.getElementById("convert-button");

convertButton.addEventListener("click", function(event) {
    event.preventDefault();

    let inputValue = document.getElementById("numeric-value").value;
    inputValue = parseFloat(inputValue);

    let conversionList = document.getElementsByTagName("select")[0];
    let conversionChoice = conversionList.options[conversionList.selectedIndex].value;

    let result;
    let output;

    if (isNaN(inputValue)) {
        document.getElementById("conversion-result").innerHTML = "Please enter a valid number.";
        return;
    }

    if (conversionChoice === "inch to centimeter") {
        result = inputValue * 2.54;
        output = inputValue + " inches is " + result.toFixed(2) + " centimeters.";

    } else if (conversionChoice === "foot to centimeter") {
        result = inputValue * 30.48;
        output = inputValue + " feet is " + result.toFixed(2) + " centimeters.";

    } else if (conversionChoice === "yard to meter") {
        result = inputValue * 0.91;
        output = inputValue + " yards is " + result.toFixed(2) + " meters.";

    } else if (conversionChoice === "mile to kilometer") {
        result = inputValue * 1.61;
        output = inputValue + " miles is " + result.toFixed(2) + " kilometers.";

    } else if (conversionChoice === "centimeter to inch") {
        result = inputValue * 0.39;
        output = inputValue + " centimeters is " + result.toFixed(2) + " inches.";

    } else if (conversionChoice === "centimeter to foot") {
        result = inputValue * 0.0328;
        output = inputValue + " centimeters is " + result.toFixed(2) + " feet.";

    } else if (conversionChoice === "meter to yard") {
        result = inputValue * 1.09;
        output = inputValue + " meters is " + result.toFixed(2) + " yards.";

    } else if (conversionChoice === "kilometer to mile") {
        result = inputValue * 0.62;
        output = inputValue + " kilometers is " + result.toFixed(2) + " miles.";
    }

    document.getElementById("conversion-result").innerHTML = output;
});