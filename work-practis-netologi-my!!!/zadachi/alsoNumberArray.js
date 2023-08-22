const numberArray = [1, 5, 7, 574, 24, 7, 3, 28, 4626];

function alsoNumberArray(originaNumber) {

	const newArray = [];

	for (let i = 0; i < originaNumber.length; i++) {
		newArray.push(originaNumber[i])
		if (originaNumber[i] >= 0 && originaNumber[i] <= 9) {
			newArray.push(originaNumber[i])
		}
	}

	return newArray
}

console.log(alsoNumberArray(numberArray))