const array = [1, 5, 6, 47, 45, 35, 60, 25, 55, 65, 75]


function ArrayFiveDelete(arr) {

	let newArray = [];

	for (let array of arr) {
		if (array % 5 === 0) {
			newArray.push(array)
		}
	}
	return newArray
}

console.log(ArrayFiveDelete(array))