const string = 'Yakomoto in city NewYork also bilioner this in Russia';

function sortStringAlphabetically(str) {
	const words = str.split(' ');

	const sortedWords = words.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);

	const newString = sortedWords.join(' ');

	return newString;
}

console.log(sortStringAlphabetically(string));


