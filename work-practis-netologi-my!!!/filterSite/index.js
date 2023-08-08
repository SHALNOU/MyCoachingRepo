function myFunc() {
	let input, filter, ul, li, a, i

	input = document.getElementById('Input')
	filter = input.value.toUpperCase()
	ul = document.getElementById('myUl')
	li = document.getElementsByTagName('li')


	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0]
		if (a.innerHTML.toUpperCase().indexOf(filter) !== -1) {
			li[i].style.display = 'block'
		} else {
			li[i].style.display = 'none'
		}
	}

}