function newArraydef() {

	let newStringNumber = '';

	for (let i = 0; i < 7; i++) {
		newStringNumber += `${i}-`
	}

	return newStringNumber
}

console.log(newArraydef())