const arrayPustString = [1, '', 2, 3, '', 5]

function deleteStringZero(arr) {

	let newString = arr.filter((el) => el !== '')
	return console.log(newString)
}

deleteStringZero(arrayPustString)