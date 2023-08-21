var zeroToNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

function toReadable(number) {
	let num = number.toString();
	let length = num.length;
	let str = '';

	if (num[2]) { // if there are three numbers
		str += `${zeroToNine[num[0]]} hundred `;
		if (num[1] == '1') { // if the second number is 1
			str += `${teens[num[length - 1]]} `;
			return str.trim();
		}
	}

	if (length == 2 && num[0] == '1') { // if there are two numbers and the first number is 1
		str += `${teens[num[length - 1]]} `;
		return str.trim();
	}

	let indexForTens = num[2] ? 1 : 0;
	if (num.length > 1 && num[indexForTens] != '0') str += `${tens[num[indexForTens]]} `; // if there are more than one numbers, add tens
	if (num[length - 1] != '0') str += `${zeroToNine[num[length - 1]]}`; // if the second number is 0 or it does not exist AND the last number is not 0
	if (length == 1 && num[0] == '0') str += 'zero';
	return str.trim();
};

console.log(toReadable(102))

