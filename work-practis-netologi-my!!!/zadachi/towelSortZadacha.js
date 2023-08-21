
const array = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]


function towelSort(matrix) {
	if (!matrix) {
		return []
	} else {
		matrix.map((i, index) => {
			return index % 2 !== 0 ? i.reverse() : null;
		})
	}
	return matrix.flat()
}

console.log(towelSort(array))