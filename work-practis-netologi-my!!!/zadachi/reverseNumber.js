function reverse(n) {
	const string = String(Math.abs(n));
	let result = '';

	for (let i = string.length - 1; i >= 0; i -= 1) {
		result += string[i];
	}
	return +result;
};

console.log(reverse(546))