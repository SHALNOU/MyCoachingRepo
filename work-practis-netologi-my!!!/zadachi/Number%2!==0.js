const number = 12357;

function ifNumber(num) {

	let newArray = [];

	let arrayNumber = num.toString().split('')
	for (let number of arrayNumber) {
		newArray.push(number)
	}

	if (newArray % 2 !== 0) {
		throw new Error('ошибка числа не четные')
	} else {
		console.log('все четное')
	}
}

ifNumber(number)