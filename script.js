// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    // TODO: Implement the conversion logic here

     celsius = (parseFloat(celsius* 9/5) + 32);
     alert(parseFloat(celsius));
  }
  
  // Function to convert Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
    // TODO: Implement the conversion logic here
    fahrenheit = (parseFloat(fahrenheit - 32) * 5/9);
    alert(parseFloat(fahrenheit));
     
  }
  
  // Prompt the user for input
  //  parseFloat(prompt("Enter the temperature:"));
  let conversionType = prompt("Choose the conversion type: (Celsius to Fahrenheit or Fahrenheit to Celsius)");
  
  if (conversionType.toLowerCase() === "celsius to fahrenheit") {
    // TODO: Call the celsiusToFahrenheit function and display the result
    celsiusToFahrenheit(prompt("Enter the temperature:"));
    // alert(temperature);
  } else if (conversionType.toLowerCase() === "fahrenheit to celsius") {
    // TODO: Call the fahrenheitToCelsius function and display the result
    fahrenheitToCelsius(prompt("Enter the temperature:"));
    // alert(temperature);
  } else {
    alert("Invalid conversion type.");
  }