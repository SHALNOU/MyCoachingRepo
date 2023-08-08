const string = 'aaa bbb ccc eee fff';
const array = string.split(' ')

array.map((el) => {
	console.log(el[0].toUpperCase() + el)
})

function replaceFirstChar(str) {
	let array = []
	let split = str.split(' ')
	for (let i = 0; i < split.length; i++) {
		let worm = split[i];
		let forma = worm[0].toUpperCase();
		let strSlice = worm.slice(1);
		let result = forma + strSlice
		array.push(result)
	}
	return array
}

console.log(replaceFirstChar(string))




