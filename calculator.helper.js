function helper (operator, num1, num2) {
	var result;

	switch(operator){
		case "addition":
		result = add(num1, num2);
		break;

		case "subtraction":
		result = subtract(num1, num2);
		break;

		case "multiplication":
		result = multiply(num1, num2);
		break;

		case "division":
		result = divide(num1, num2);
		break;

		default:
		result = "Sorry, please enter a valid operator!"
	}

	function add(a, b){
		return a + b
	}

	function subtract(a, b){
		return a - b
	}

	function multiply(a, b){
		return a * b
	}

	function divide(a, b){
		return a / b
    }

    return result;
}

module.exports = helper;