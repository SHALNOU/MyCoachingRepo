const deleteNumberOne = 68;
const deleteNumberTwo = 453;

function delNumber(num, numTwo) {
	let newArraydelete = [];
	let newArraydeleteTwo = [];

	for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
			newArraydelete.push(i);
		}
	}

	for (let i = 1; i <= numTwo; i++) {
		if (numTwo % i === 0) {
			newArraydeleteTwo.push(i);
		}
	}

	return [newArraydelete, newArraydeleteTwo];
}



const delOne = delNumber(deleteNumberOne);
const delTwo = delNumber(deleteNumberTwo)

console.log(`делитель для числа ${deleteNumberOne}: ${delOne} для числа ${deleteNumberTwo}: ${delTwo}`)