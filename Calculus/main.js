
var calculateButton = document.getElementById('calculate'),
    userInput = document.getElementById('userInput'),
    result = document.getElementById('result');
calculateButton.addEventListener('click', function() {
    result.innerHTML = "The answer is " + calculate(parseCalculationString(userInput.value));
});