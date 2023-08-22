const arrayNumber = [22, 44, 56, 2354, 23, 43621, 2534];

function numberMax(arr) {

	if (arr.length === 0) {
		return undefined;
	}

	let arrayMaxNumber = arr[0];

	for (let i = 1; i <= arr.length; i++) {
		if (arr[i] > arrayMaxNumber) {
			arrayMaxNumber = arr[i];
		}
	}

	return arrayMaxNumber
}

console.log(numberMax(arrayNumber))