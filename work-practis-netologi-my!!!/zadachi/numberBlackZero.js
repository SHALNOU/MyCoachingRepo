const number = 1234560078;

function returnNumberUp(num) {
	let stringNumber = num.toString();
	let allPositive = true;

	for (let i = 0; i < stringNumber.length; i++) {
		if (stringNumber[i] <= '0') {
			allPositive = false;
			break;
		}
	}

	if (allPositive) {
		console.log('Все цифры больше нуля');
	} else {
		console.log('Есть цифра(ы), которая меньше или равна 0');
	}
}

returnNumberUp(number);
