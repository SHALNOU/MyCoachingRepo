const item = document.querySelector('.item');
const placeholder = document.querySelectorAll('.placeholder')



placeholder.forEach((element) => {
element.addEventListener('dragover', dragover)
element.addEventListener('dragenter', dragenter)
element.addEventListener('dragleave', dragleave)
element.addEventListener('drop', dragdrop)
})

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

function dragstart (event) {
event.target.classList.add('hold')
setTimeout(() => {
	event.target.classList.add('hide')
}, 0)

}

function dragend (event) {
	event.target.classList.remove('hold', 'hide')
}

function dragover(event){

event.preventDefault();
}

function dragenter(event){
	event.target.classList.add('draghovered')

}

function dragleave(event){
	event.target.classList.remove('draghovered')
	
	
}

function dragdrop(event){
event.target.append(item)
}