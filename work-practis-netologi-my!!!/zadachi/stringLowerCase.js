const str = 'AbCdE'

function strTrans(str) {
	let strSplit = str.split('')
	let string = ''
	for (let i = 0; i < strSplit.length; i++) {
		if (i % 2 === 0) {
			string += strSplit[i].toLowerCase()
		} else {
			string += strSplit[i].toUpperCase()
		}
	}

	return string
}
console.log(strTrans(str))