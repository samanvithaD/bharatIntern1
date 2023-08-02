function convertTemperature() {
    const temperatureInput = document.getElementById("temperature").value;
    const unitSelect = document.getElementById("unit").value;
    let convertedTemperature;

    if (unitSelect === "celsius") {
        convertedTemperature = celsiusToFahrenheit(temperatureInput);
    } else {
        convertedTemperature = fahrenheitToCelsius(temperatureInput);
    }

    document.getElementById("result").textContent = `${temperatureInput} degrees ${unitSelect} is ${convertedTemperature.toFixed(2)} degrees ${unitSelect === "celsius" ? "Fahrenheit" : "Celsius"}`;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
