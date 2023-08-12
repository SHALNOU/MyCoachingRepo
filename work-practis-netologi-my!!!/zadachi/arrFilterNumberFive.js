const numberArray = [33, 55, 34, 23523, 5673, 2, 346, 23423, 12312]

function filterArray(arr) {

	const result = arr.filter(numbers => numbers.toString().length <= 3)

	return result
}


console.log(filterArray(numberArray))