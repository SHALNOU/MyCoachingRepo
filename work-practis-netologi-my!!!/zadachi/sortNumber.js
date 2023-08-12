const number = 35142

function sortNumber(num) {

	const NumberString = num.toString().split('')

	const sort = NumberString.sort((a, b) => a - b).join('')

	return sort
}

console.log(sortNumber(number))