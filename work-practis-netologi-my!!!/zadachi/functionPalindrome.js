const string = 'abcba';

function palindrome(str) {

	let reverse = str.split('').reverse().join('')

	if (str === reverse) {
		console.log('строки совпадают')
	} else {
		console.log('в противном случае нет')
	}

}

palindrome(string)