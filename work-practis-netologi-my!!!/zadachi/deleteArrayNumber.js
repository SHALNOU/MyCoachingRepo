const StringNumber = '1 22 333 4444 22 5555 1';

function deleteStringNumber(str) {

	let newArray = [];

	let arrayString = str.split(' ');

	for (let i = 0; i < arrayString.length; i++) {

		if (arrayString[i].length <= 3) {
			newArray.push(arrayString[i])
		}
	}
	return newArray
}

console.log(deleteStringNumber(StringNumber))