const sliderPortGallery = new Swiper('.cards-region-gallery__swiper', {

	speed: 400,
	slidesPerView: 1.2,
	slidesPerGroup: 1,

	navigation: {
		nextEl: '.cards-region-gallery__btn-next',
		prevEl: '.cards-region-gallery__btn-prew',
	},

	scrollbar: {
		el: '.cards-region-gallery__swiper-scrollbar',
		draggable: true,
	},

	pagination: {
		el: '.cards-region-gallery__swiper-pagination',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
			return '0<span class="' + currentClass + '"></span>'
		},
	},

	breakpoints: {
		480: {
			slidesPerView: 1.3,
			slidesPerGroup: 1,
		},
		768: {
			slidesPerView: 2.3,
			slidesPerGroup: 2,
		},
		998: {
			slidesPerView: 3.2,
			slidesPerGroup: 4,
		}
	},

	observer: true,
	observeParents: true,
	observeSlideChildren: true,
});

const sliderPorts = new Swiper('.cards-region__swiper', {

	speed: 400,
	slidesPerView: 1.2,
	slidesPerGroup: 1,

	navigation: {
		nextEl: '.cards-region__btn-next',
		prevEl: '.cards-region__btn-prew',
	},

	scrollbar: {
		el: '.cards-region__swiper-scrollbar',
		draggable: true,
	},

	pagination: {
		el: '.cards-region__swiper-pagination',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
			return '0<span class="' + currentClass + '"></span>'
		},
	},

	breakpoints: {
		480: {
			slidesPerView: 1.3,
			slidesPerGroup: 1,
		},
		768: {
			slidesPerView: 2.3,
			slidesPerGroup: 2,
		},
		998: {
			slidesPerView: 4.3,
			slidesPerGroup: 4,
		}
	},

	observer: true,
	observeParents: true,
	observeSlideChildren: true,
});

sliderPortGallery.on('slideChange', renderZeroPagination.bind(sliderPortGallery));
sliderPorts.on('slideChange', renderZeroPagination.bind(sliderPorts));


function renderZeroPagination() {
	let pag = this.pagination.el
	let count = +pag.querySelector('span').innerHTML
	if (count < 10) {
		this.pagination.el.innerHTML =
			`<span class="swiper-pagination-current">0${count}</span>`
	}
}