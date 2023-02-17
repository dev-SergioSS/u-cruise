let dropdowns = document.querySelectorAll('.ss-dropdown')

window.addEventListener('click', (e) => {
	if (!e.target.closest('.ss-dropdown')) {
		dropdowns.forEach(el => el.classList.remove('open'))
	}
})

if (dropdowns !== null) {
	renderDropdown()
	dropdowns.forEach(dropdown => dropdown.addEventListener('click', (e) => {
		dropdowns.forEach(el => {
			if (el !== dropdown) el.classList.remove('open')
		})
		dropdown.classList.toggle('open')
		let item = e.target.closest('.ss-styled-dropdown__item')
		if (item) setDropdown(e.currentTarget, item)

	}))
}

function renderDropdown() {
	dropdowns.forEach(dropdown => {
		//wrapper
		let styledDropdown = document.createElement('div')
		styledDropdown.classList.add('ss-styled-dropdown')
		dropdown.append(styledDropdown)

		//head
		let head = document.createElement('div')
		head.classList.add('ss-styled-dropdown__head')
		styledDropdown.append(head)

		//head-selected
		let selectedItem = document.createElement('div')
		selectedItem.classList.add('ss-styled-dropdown__selected-item')
		head.append(selectedItem)

		//list
		let list = document.createElement('ul')
		list.classList.add('ss-styled-dropdown__list')
		styledDropdown.append(list)

		//options
		dropdown.querySelectorAll('option').forEach((option, idx) => {
			let item = document.createElement('li')
			item.classList.add('ss-styled-dropdown__item')
			if (idx === 0) item.classList.add('selected')
			item.innerHTML = option.innerHTML
			list.append(item)
		})

		initDropdown(dropdown)
	})
}


function initDropdown(dropdown) {
	let selectedOption = dropdown.querySelector('option')
	let headSelectedItem = dropdown.querySelector('.ss-styled-dropdown__selected-item')
	headSelectedItem.innerHTML = selectedOption.innerHTML
}

function setDropdown(dropdown, selectedItem) {
	let items = dropdown.querySelectorAll('.ss-styled-dropdown__item')
	let headSelectedItem = dropdown.querySelector('.ss-styled-dropdown__selected-item')
	let options = dropdown.querySelectorAll('option')

	items.forEach(el => el.classList.remove('selected'))
	selectedItem.classList.add('selected')
	headSelectedItem.innerHTML = selectedItem.innerHTML

	options.forEach(option => {
		option.selected = false
		if (option.innerHTML == selectedItem.innerHTML) {
			option.selected = true
		}
	})

}

//^ reset

let btnReset = document.querySelector('.btn-reset')

if (btnReset !== null) {
	btnReset.addEventListener('click', () => {
		dropdowns.forEach(el => setDropdown(el, el.querySelector('.ss-styled-dropdown__item')))
	})
}