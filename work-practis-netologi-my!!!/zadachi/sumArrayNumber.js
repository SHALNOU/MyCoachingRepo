const array = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]


function summa(arr) {

	let result = 0;

	for (let array of arr) {

		const sumArr = array.reduce((acc, cur) => acc + cur, 0);
		result += sumArr

	}
	return result
}

console.log(summa(array))