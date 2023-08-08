const string = 'gfndfghfgh345233xbzbh2';

function filterString(str) {
	let numberArray = [];
	let symbolArray = [];

	for (let i = 0; i < str.length; i++) {
		let char = str[i];

		if (!isNaN(parseInt(char))) {
			numberArray.push(parseInt(char)); // Преобразуем символ в число и добавляем в массив чисел
		} else {
			symbolArray.push(char);
		}
	}

	if (symbolArray.length <= 3) {
		return 'string not three symbols';
	} else {
		return 'string have three or many symbols';
	}
}

const result = filterString(string);
console.log(result); // Выведет 'string have three or many symbols'
