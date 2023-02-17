//^ open full card

let buttonsMore = document.querySelectorAll('.card-cabin__btn-more')

buttonsMore.forEach(btn => btn.addEventListener('click', (e) => {
	e.currentTarget.closest('.card-cabin').classList.add('open')
}))

//^ popup scale image

let buttonsScale = document.querySelectorAll('.popup__ship-btn')
let shipImage = document.querySelector('#popup-cabins .card-cabin__ship-img')
let count = 0

buttonsScale.forEach(btn => btn.addEventListener('click', (e) => {
	let isBtnPlus = e.currentTarget.classList.contains('card-cabin__ship-btn_plus')
	if (isBtnPlus && count < 3) count++
	else if (!isBtnPlus && count > 0) count--
	setScaleImage()
	console.log(count);
}))

function setScaleImage() {
	if (count === 0) {
		buttonsScale[1].classList.add('disable')
		shipImage.className = 'card-cabin__ship-img'
	}
	else if (count === 1) {
		buttonsScale[1].classList.remove('disable')
		shipImage.className = 'card-cabin__ship-img scale-2x'
	}
	else if (count === 2) {
		buttonsScale[0].classList.remove('disable')
		shipImage.className = 'card-cabin__ship-img scale-4x'
	}
	else if (count === 3) {
		buttonsScale[0].classList.add('disable')
		shipImage.className = 'card-cabin__ship-img scale-6x'
	}
}

setScaleImage()



//^ sliders

const sliderPlaying = new Swiper('.cards-play__swiper', {

	speed: 400,
	slidesPerView: 1.3,
	slidesPerGroup: 1,

	navigation: {
		nextEl: '.cards-play__btn-next',
		prevEl: '.cards-play__btn-prew',
	},

	scrollbar: {
		el: '.cards-play__swiper-scrollbar',
		draggable: true,
	},

	pagination: {
		el: '.cards-play__swiper-pagination',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
			return '0<span class="' + currentClass + '"></span>'
		},
	},

	breakpoints: {
		768: {
			slidesPerView: 2.3,
			slidesPerGroup: 2,
		},
		998: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		}
	},

	observer: true,
	observeParents: true,
	observeSlideChildren: true,
});
const sliderGallery = new Swiper('.cards-gallery__swiper', {

	speed: 400,
	slidesPerView: 1.3,
	slidesPerGroup: 1,

	navigation: {
		nextEl: '.cards-gallery__btn-next',
		prevEl: '.cards-gallery__btn-prew',
	},

	scrollbar: {
		el: '.cards-gallery__swiper-scrollbar',
		draggable: true,
	},

	pagination: {
		el: '.cards-gallery__swiper-pagination',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
			return '0<span class="' + currentClass + '"></span>'
		},
	},

	breakpoints: {
		768: {
			slidesPerView: 2.3,
			slidesPerGroup: 2,
		},
		998: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		}
	},

	observer: true,
	observeParents: true,
	observeSlideChildren: true,
});

sliderPlaying.on('slideChange', renderZeroPagination.bind(sliderPlaying));
sliderPlaying.on('slideChange', renderZeroPagination.bind(sliderGallery));

function renderZeroPagination() {
	let pag = this.pagination.el
	let count = +pag.querySelector('span').innerHTML
	if (count < 10) {
		this.pagination.el.innerHTML =
			`<span class="swiper-pagination-current">0${count}</span>`
	}
}