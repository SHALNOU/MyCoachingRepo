const arrayNumber = [
	[2, 1, 4, 3, 5],
	[3, 5, 2, 4, 1],
	[4, 3, 1, 5, 2],
];

function sortArray(arr) {
	for (let i = 0; i < arr.length; i++) {
		arr[i].sort((a, b) => a - b);
	}
}
sortArray(arrayNumber);
console.log(arrayNumber);



// function sortArrayTwo(arr) {
// 	let newArraay = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < arr[i].length; j++) {
// 			newArraay.push(arr[i][j])
// 		}
// 	}
// 	let result = newArraay.sort((a, b) => a - b)
// 	return result
// }
// console.log(sortArrayTwo(arrayNumber))