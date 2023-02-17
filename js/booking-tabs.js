//^ tabs

let tabsNavButtons = document.querySelectorAll('.booking-tabs__nav-item')
let tabsBlocks = document.querySelectorAll('.booking-tabs__block')

tabsNavButtons.forEach(btn => btn.addEventListener('click', (e) => {
	let index = e.currentTarget.dataset.tab

	tabsNavButtons.forEach(el => {
		if (el == e.currentTarget) el.classList.add('active')
		else el.classList.remove('active')
	})

	tabsBlocks.forEach(el => {
		if (el.dataset.tab == index) el.classList.add('open')
		else el.classList.remove('open')
	})
}))
