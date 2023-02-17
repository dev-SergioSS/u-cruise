//^ init swipers 

const promoSwiper = new Swiper('.promo__swiper', {

	speed: 600,

	effect: 'fade',
	fadeEffect: {
		crossFade: false
	},

	navigation: {
		nextEl: '.promo__swiper-button-next',
		prevEl: '.promo__swiper-button-prev',
	},

	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
		stopOnLastSlide: false
	},
	// loop: true,

	slidesPerView: 1,
	slidesPerGroup: 1,

	scrollbar: {
		el: '.promo__swiper-scrollbar',
	},

	pagination: {
		el: '.promo__swiper-pagination',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
			return '0<span class="' + currentClass + '"></span>'
		},

		observer: true,
		observeParents: true,
		observeSlideChildren: true,
	},
});
promoSwiper.on('slideChange', renderZeroPagination.bind(promoSwiper));


let homeSliders = document.querySelectorAll('.slider-row')
homeSliders.forEach(el => {
	let elSlider = `.${el.classList[1]}__swiper`
	let elBtnNext = `.${el.classList[1]}__btn-next`
	let elBtnPrew = `.${el.classList[1]}__btn-prew`
	let elScrollbar = `.${el.classList[1]}__swiper-scrollbar`
	let elPag = `.${el.classList[1]}__swiper-pagination`

	initSlider(elSlider, elBtnNext, elBtnPrew, elScrollbar, elPag)
})

function initSlider(elSlider, elBtnNext, elBtnPrew, elScrollbar, elPag) {
	const slider = new Swiper(elSlider, {
		speed: 400,
		slidesPerView: 1.2,
		slidesPerGroup: 1,

		navigation: {
			nextEl: elBtnNext,
			prevEl: elBtnPrew
		},

		scrollbar: {
			el: elScrollbar,
			draggable: true,
		},

		pagination: {
			el: elPag,
			type: 'fraction',
			renderFraction: function (currentClass, totalClass) {
				return '0<span class="' + currentClass + '"></span>'
			},
		},

		breakpoints: {
			768: {
				slidesPerView: 2.2,
				slidesPerGroup: 2,
			},
			998: {
				slidesPerView: 3.2,
				slidesPerGroup: 3,
			}
		},

		observer: true,
		observeParents: true,
		observeSlideChildren: true,
	});

	slider.on('slideChange', () => renderZeroPagination.bind(slider));
}


function renderZeroPagination() {
	let pag = this.pagination.el
	let count = +pag.querySelector('span').innerHTML
	if (count < 10) {
		this.pagination.el.innerHTML =
			`<span class="swiper-pagination-current">0${count}</span>`
	}
}