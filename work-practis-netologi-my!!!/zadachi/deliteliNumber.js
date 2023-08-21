const deleteNumber = 68;

function delNumber(num) {

	let newArraydelete = [];

	for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
			newArraydelete.push(i)
		}
	}
	return newArraydelete
}

const divisors = delNumber(deleteNumber)
console.log(`Делители числа ${deleteNumber}:`, divisors);