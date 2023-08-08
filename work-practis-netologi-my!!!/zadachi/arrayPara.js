const arrayNumber = [1, 2, 3, 4, 5, 6]

function ARR_CATH() {
	let arr = []
	for (let i = 0; i < arrayNumber.length; i += 2) {
		const el = arrayNumber[i];
		const sel = arrayNumber[i] + 1
		const result = +`${el}${sel}`
		arr.push(result)
	}
	return arr
}

console.log(ARR_CATH(arrayNumber))

