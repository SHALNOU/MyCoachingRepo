const arrayString = 'abbabba gfryrt aa Rhertyer Aaa rtj53 aaa'

function StringNewSybol(str) {

	let newArray = []

	let splitString = str.toLowerCase().split(' ')

	for (let string of splitString) {
		if (string[0] === 'a') {
			newArray.push(string)
		}
	}

	let result = newArray.join(' ')
	return result
}

console.log(StringNewSybol(arrayString))