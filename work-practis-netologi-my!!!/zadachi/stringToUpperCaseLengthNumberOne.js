const string = 'i am Toeo Yakomoto also Vladilen and Baiborodov or Boroda or Vladosik';

function stringToUpperCaseNumberLength(str) {

	const word = str.split(' ')
	const modificateWord = word.map(word => {
		const lastChar = word[word.length - 1];
		const upperCase = lastChar.toUpperCase()
		return word.slice(0, -1) + upperCase
	})

	return modificateWord.join(' ')

}

console.log(stringToUpperCaseNumberLength(string))