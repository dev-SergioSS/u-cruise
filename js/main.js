//^ mobileMenu

const btnMenu = document.querySelector('.menu__icon');
const menuContent = document.querySelector('.menu__list');
const menuLink = document.querySelectorAll('.menu__item-link');

if (btnMenu != null) {
	btnMenu.addEventListener('click', function () {
		btnMenu.classList.toggle('open');
		menuContent.classList.toggle('open');
		lockBody('lock');
		lang.classList.toggle('hiden')
	});
}

for (link of menuLink) {
	link.addEventListener('click', () => {
		btnMenu.classList.remove('open');
		menuContent.classList.remove('open');
		lockBody('unlock');
		lang.classList.remove('hiden')

	});
}

function lockBody(action) {
	const body = document.querySelector('body');

	if (action == 'lock') {
		body.classList.toggle('lock');
	} else if (action == 'unlock') {
		body.classList.remove('lock');
	}
}

//^  menu

let menuItems = document.querySelectorAll('.menu__item')
let menuItemLists = document.querySelectorAll('.menu__item-list')
let menuItemsName = document.querySelectorAll('.menu__item-name')



menuItems.forEach(el => {
	el.addEventListener('mouseenter', (e) => {
		e.currentTarget.classList.add('active')
	})
	el.addEventListener('mouseleave', (e) => {
		e.currentTarget.classList.remove('active')
	})
})

// стрілка вниз в моб.версії, якщо є вкладений список
menuItemsName.forEach(el => {
	let ul = el.nextElementSibling
	if (ul !== null && ul.classList.contains('menu__item-list'))
		el.classList.add('includes')
})


//^ header

let headerTopRow = document.querySelector('.header-toolbar__left-wrap')
let headerBottomRow = document.querySelector('.menu')
let socialsWrapMobile = document.querySelector('.menu__socials-mobile')

let lang = document.querySelector('.header__lang')
let headerSocials = document.querySelector('.header__socials')


function resizeHeader() {
	let widthWindow = document.body.clientWidth

	if (widthWindow > 998) {
		headerTopRow.append(headerSocials)
		headerTopRow.append(lang)
	} else {
		headerBottomRow.prepend(lang)
		socialsWrapMobile.append(headerSocials)
	}
}
resizeHeader()



//^ header position

let header = document.querySelector('.header')
let oldScrollTop = 0;

document.addEventListener('scroll', (e) => {
	const scrollTop = document.documentElement.scrollTop;
	if (oldScrollTop > scrollTop) header.classList.add('show')
	else header.classList.remove('show')
	oldScrollTop = scrollTop;
});

//^ header lang
let langHead = document.querySelector('.lang__head .lang__item')
let langList = document.querySelector('.lang__list')

lang.addEventListener('click', (e) => lang.classList.toggle('open'));
langList.addEventListener('click', (e) => {
	let langItem = e.target.closest('.lang__item')
	if (langItem) langHead.innerHTML = langItem.innerHTML
})



//^ footer details 

let summary = document.querySelectorAll('.footer-content__summary');
let details = document.querySelectorAll('.footer-content__details');

summary.forEach(el => el.addEventListener('click', (e) => {
	e.preventDefault();
	resizeDetails(e)
}))



function resizeDetails(e) {
	let widthWindow = document.body.clientWidth

	if (widthWindow > 768) {
		details.forEach((el) => (el.open = true));
	} else {
		if (e === null) {
			details.forEach((el) => (el.open = false));
		} else {
			let parent = e.currentTarget.parentElement;
			isOpenParent = parent.open
			details.forEach((el) => (el.open = false));
			parent.open = !isOpenParent
		}
	}
}

//^ filter on mobile 

let filterTitle = document.querySelector('.filter__title')
if (filterTitle !== null) {
	filterTitle.onclick = () => filterTitle.classList.toggle('open')
}

//^ text- btn-show-all

let textBlock = document.querySelector('.text')
let btnMoreText = document.querySelector('.text__btn-show-all')

if (btnMoreText !== null) {
	btnMoreText.addEventListener('click', () => {
		textBlock.classList.add('show')
		btnMoreText.style.display = 'none'
	})
}

// close open dropdown 

// window.addEventListener('click', (e) => {
// 	// if (!e.target.closest('.menu__item')) {
// 	// 	menuItems.forEach(el => el.classList.remove('active'))
// 	// }
// 	if (!e.target.closest('.header__lang')) {
// 		lang.classList.remove('open')
// 	}
// })

//^ gallery

let gallery = document.querySelector('.gallery')
let galleryItems = document.querySelectorAll('.gallery__card')
let activeIndex = 0;
let lastIndex = galleryItems.length - 1

function setSizeGallery() {
	if (gallery !== null) {
		// перевірка розміру вікна
		let widthWindow = document.body.clientWidth

		// ПК версія
		if (widthWindow > 768) {
			galleryItems.forEach(el => el.addEventListener('mouseenter', (e) => {
				toggleClasses(e.currentTarget, galleryItems, 'active')
			}))
		}
		// мобільна версія
		else {
			setSlides()
			slide()
		}
	}
}
setSizeGallery()

function slide() {

	let x1 = null;
	let y1 = null;

	gallery.addEventListener('touchstart', (event) => {
		const firstTouch = event.touches[0];
		x1 = firstTouch.clientX;
		y1 = firstTouch.clientY;
	})

	gallery.addEventListener('touchmove', (event) => {
		if (!x1 || !y1) {
			return false;
		}

		let x2 = event.touches[0].clientX;
		let y2 = event.touches[0].clientY;
		let xDif = x2 - x1;
		let yDif = y2 - y1;

		if (Math.abs(xDif) > Math.abs(yDif)) {
			if (xDif > 0) setActiveIndex('left')
			else setActiveIndex('right')
		}

		x1 = null;
		y1 = null;
	})
}

function setActiveIndex(slide) {
	if (slide === 'left' && activeIndex < lastIndex) activeIndex++
	else if (slide === 'right' && activeIndex > 0) activeIndex--
	setSlides()
}

function setSlides() {

	// all hide
	galleryItems.forEach(el => {
		el.classList.add('none')
		el.classList.remove('active')
	})

	// set active
	galleryItems[activeIndex].classList.remove('none')
	galleryItems[activeIndex].classList.add('active')

	// set prew-next
	if (activeIndex === 0) {
		galleryItems[1].classList.remove('active')
		galleryItems[1].classList.remove('none')
		galleryItems[2].classList.remove('active')
		galleryItems[2].classList.remove('none')
	}
	else if (activeIndex === lastIndex) {
		galleryItems[lastIndex - 1].classList.remove('active')
		galleryItems[lastIndex - 1].classList.remove('none')
		galleryItems[lastIndex - 2].classList.remove('active')
		galleryItems[lastIndex - 2].classList.remove('none')
	}
	else {
		galleryItems[activeIndex - 1].classList.remove('active')
		galleryItems[activeIndex - 1].classList.remove('none')
		galleryItems[activeIndex + 1].classList.remove('active')
		galleryItems[activeIndex + 1].classList.remove('none')
	}
}

//^ functions

function toggleClasses(currentEl, list, className) {
	list.forEach(el => el.classList.remove(`${className}`))
	currentEl.classList.add(`${className}`)
}

window.addEventListener('resize', () => {
	resizeDetails(null)
	resizeHeader()
	setSizeGallery()
})