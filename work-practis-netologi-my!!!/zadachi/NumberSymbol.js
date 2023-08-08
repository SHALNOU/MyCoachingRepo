let num = 50;


function returnSymbolZero(num) {

	let newStringArray = [];

	for (let i = 0; i < num; i++) {
		newStringArray.push(0)
	}

	return newStringArray.join('');
}

console.log(returnSymbolZero(num)) 