
let obj = {
	1: {
		1: 11,
		2: 12,
		3: 13,
	},
	2: {
		1: 21,
		2: 22,
		3: 23,
	},
	3: {
		1: 24,
		2: 25,
		3: 26,
	},
}

function sumObject(obj) {

	let sum = 0

	for (key in obj) {
		if (typeof obj[key] === 'number') {
			sum += obj[key]
		} else if (typeof obj[key] === 'object') {
			sum += sumObject(obj[key])
		}
	}

	return sum

}

console.log(sumObject(obj))