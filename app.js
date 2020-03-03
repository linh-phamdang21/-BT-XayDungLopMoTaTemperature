let Temperature = function (temperature) {
    this.temperature = temperature;
    this.setTemperature = function (temperature) {
        this.temperature = temperature;
    }
    this.getTemperature = function () {
        return this.temperature;
    }
    this.celciusToKenvin = function () {
        return this.temperature + 273.15;
    }
    this.celciusToFahrenheit = function () {
        return this.temperature * 1.8 + 32;
    }
    this.displayResult = function (result) {
        alert(result);
    }
}

let temperature = new Temperature(25);
temperature.displayResult("C to F: " +  temperature.celciusToFahrenheit());
temperature.displayResult("C to K: " + temperature.celciusToKenvin());
temperature.setTemperature(40);
temperature.displayResult("C to F: " +  temperature.celciusToFahrenheit());
temperature.displayResult("C to K: " + temperature.celciusToKenvin());
