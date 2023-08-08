const cols = document.querySelectorAll(".col");


document.addEventListener('keydown', (event) => {
	event.preventDefault();

	if (event.code.toLocaleLowerCase() === 'space') {
		setRandomColors();
	}

})

document.addEventListener('click', (event) => {


	const type = event.target.dataset.type;


	if (type === 'lock') {
		const node
			= event.target.tagName.toLocaleLowerCase() === 'i'
				? event.target
				: event.target.children[0];

		node.classList.toggle('fa-lock-open')
		node.classList.toggle('fa-lock')
	} else if (type === 'copy') {
		copyToClickBoard(event.target.textContent)
	}
})


function generateColorsRandom() {

	const hexCods = '0123456789ABCDEF';
	let color = '';

	for (let i = 0; i < 6; i++) {
		color += hexCods[Math.floor(Math.random() * hexCods.length)];
	}

	return '#' + color;
}


function setRandomColors(isInithial) {
	let colors = isInithial ? getColorsFromHash() : [];
	cols.forEach((col, index) => {
		const isLoked = col.querySelector('i').classList.contains('fa-lock')
		const text = col.querySelector('h2');
		const color = isInithial ? colors[index] ? colors[index] : generateColorsRandom() : generateColorsRandom()
		const button = col.querySelector('button')


		if (isLoked) {
			colors.push(text.textContent)
			return
		}

		if (!isInithial) {
			colors.push(color)
		}



		col.style.background = color;
		text.textContent = color;



		setTextColor(text, color,)
		setTextColor(button, color,)



	});

	updateColorHash(colors)
}


function copyToClickBoard(text) {
	return navigator.clipboard.writeText(text)
}

function setTextColor(text, color) {
	const luminance = chroma(color).luminance();

	text.style.color = luminance > 0.5 ? 'black' : 'white'

}


function updateColorHash(colors = []) {
	document.location.hash = colors
		.map(el => el.substring(1))
		.join('-')
}


function getColorsFromHash() {
	if (document.location.hash.length > 1) {


		document.location.hash
			.substring(1)
			.split('-')
			.map(el => '#' + el)

	}
	return []
}

setRandomColors(true);
