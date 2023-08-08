const number = 1234;

function sortNumber(num) {

	let StringNumber = num.toString();

	for (let i = 1; i < StringNumber.length; i++) {

		if (parseInt(StringNumber[i]) <= parseInt(StringNumber[i - 1])) {
			return false
		}
	}
	return true
}

console.log(sortNumber(number))