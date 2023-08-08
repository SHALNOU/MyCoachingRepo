const arrayAlso = [1, 5, 5, 3, 2, 7, 8, 8];

let duplicationElement = []

function arrayAlsoElement(arr) {

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {

			if (arr[i] === arr[j] && !duplicationElement.includes(arr[i])) {
				duplicationElement.push(arr[i])
			}

		}
	}

	return console.log(duplicationElement);
}

arrayAlsoElement(arrayAlso);


function duplication(arr) {

	const newSet = new Set();
	const newDuble = [];

	for (let element of arr) {
		if (newSet.has(element)) {
			newDuble.push(element)
		} else {
			newSet.add(element)
		}
	}

	return console.log(newDuble);

}

duplication(arrayAlso);