const slide = document.querySelectorAll('.slide')


slide.forEach((el) => {
	el.addEventListener('click', () => {
		clearActiveClass()
		el.classList.add('active')
	})
})

function clearActiveClass() {
	slide.forEach((el) => {
		el.classList.remove('active')
	})
}
