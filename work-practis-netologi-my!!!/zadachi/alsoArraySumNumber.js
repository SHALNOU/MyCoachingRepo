const newArray = [123, 456, 789];

function ArraySumNumber(arr) {

	let newArray = []
	let TwoArrayNew = []
	for (const array of arr) {
		const stringArray = array.toString().split('')
		newArray.push(stringArray)
	}

	for (const arr of newArray) {
		for (const arrTwo of arr) {
			TwoArrayNew.push(arrTwo)
		}
	}

	const result = TwoArrayNew.join(', ')
	return result
}


console.log(ArraySumNumber(newArray))