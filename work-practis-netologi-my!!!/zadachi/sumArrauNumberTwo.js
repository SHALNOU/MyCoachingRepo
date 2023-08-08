const array = [
	[
		[11, 12, 13],
		[14, 15, 16],
		[17, 17, 19],
	],
	[
		[21, 22, 23],
		[24, 25, 26],
		[27, 27, 29],
	],
	[
		[31, 32, 33],
		[34, 35, 36],
		[37, 37, 39],
	],
];

function sumArrayNumberTwo(arr) {

	const newArray = [];

	for (let array of arr) {
		for (let arrayTwo of array) {
			let sumArray = arrayTwo.reduce((acc, cur) => acc + cur, 0)
			newArray.push(sumArray)
		}
	}

	let result = newArray.reduce((acc, cur) => acc + cur, 0)

	return result

}

console.log(sumArrayNumberTwo(array));
