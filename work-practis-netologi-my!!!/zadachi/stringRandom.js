const str = 'a bc def ghij'

function strRandom(str) {
	let splitStr = str.split(' ');
	let arr = []
	for (let i = 0; i < splitStr.length; i++) {
		if (splitStr[i].length <= 3) {
			arr.push(splitStr[i].toUpperCase())
		} else {
			arr.push(splitStr[i]);
		}
	}
	return arr.join(' ')

}

strRandom(str)
console.log(strRandom(str))