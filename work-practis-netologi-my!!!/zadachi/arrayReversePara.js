const array = [1, 2, 3, 4, 5, 6];

function reverseArray(arr) {
	let newArray = [];
	let result = [];

	for (let i = 0; i < arr.length; i += 2) {
		let paraNumber = arr[i] + "" + arr[i + 1];
		newArray.push(paraNumber);
	}

	for (let number of newArray) {
		let reverse = Number(number.toString().split('').reverse().join(''));
		result.push(reverse);
	}

	return result;
}

console.log(reverseArray(array));
