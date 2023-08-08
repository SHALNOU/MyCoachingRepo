const numberArray = '1 22 333 4444 22 5555 1 574545 24234 7658568 3 5 67 83';

function numberTheString(num) {
	const numArray = num.split(' ');

	const result = numArray.filter((el) => {
		if (el.length < 3) {
			return el
		}
	}).map(Number);
	return result
}

console.log(numberTheString(numberArray));

// 