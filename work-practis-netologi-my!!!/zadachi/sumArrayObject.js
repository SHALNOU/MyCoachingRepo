const arrayObject = [
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
	{
		1: [1, 2, 3],
		2: [1, 2, 3],
		3: [1, 2, 3],
	},
];

function sumArrayObject(arr) {

	let result = 0

	for (const array of arr) {

		for (key in array) {
			if (Array.isArray(array[key])) {
				result += sumArray(array[key])
			}
		}

	}

	return result
}

function sumArray(arr) {
	return arr.reduce((acc, cur) => acc + cur, 0);
}


console.log(sumArrayObject(arrayObject))