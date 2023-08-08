const board = document.querySelector('#board')
const colorsArray = []
const SQEARS_NUMBER = 550


function generateColorsRandom() {

	const hexCods = '0123456789ABCDEF';
	let color = '';

	for (let i = 0; i < 6; i++) {
		color += hexCods[Math.floor(Math.random() * hexCods.length)];
	}

	return '#' + color;
}


for (let i = 0; i < SQEARS_NUMBER; i++) {

	const sqeare = document.createElement('div');
	sqeare.classList.add('sqeare')

	sqeare.addEventListener('mouseover', () => {
		setColor(sqeare);
	})

	sqeare.addEventListener('mouseleave', () => {
		removeColor(sqeare);
	})

	board.append(sqeare)

}

function setColor(element) {
	element.style.backgroundColor = generateColorsRandom()

	element.style.boxShadow = `0 0 2px ${generateColorsRandom()}, 0 0 10px ${generateColorsRandom()}`
}

function removeColor(element) {

	element.style.backgroundColor = '#1d1d1d'
	element.style.boxShadow = `0 0 2px #000`
}