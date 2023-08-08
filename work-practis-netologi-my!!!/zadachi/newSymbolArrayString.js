const arrayString = 'abcde abcde abcde';

function newArrayStringSymbol(str) {

	let arrayStringSplit = str.split(' ')

	let stringMap = arrayStringSplit.map(word => {

		if (word.length > 0) {
			return '!' + word.slice(1)
		} else {
			return word
		}

	})

	let result = stringMap.join(' ')

	return console.log(result)
}

newArrayStringSymbol(arrayString)