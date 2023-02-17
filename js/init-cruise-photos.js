const cardsCruisePhotosSwiper = new Swiper('.cards-cruise-photos__swiper', {

	speed: 400,
	slidesPerView: 1.2,
	slidesPerGroup: 1,

	navigation: {
		nextEl: '.cards-cruise-photos__btn-next',
		prevEl: '.cards-cruise-photos__btn-prew',
	},

	scrollbar: {
		el: '.cards-cruise-photos__swiper-scrollbar',
		draggable: true,
	},

	pagination: {
		el: '.cards-cruise-photos__swiper-pagination',
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
			return '0<span class="' + currentClass + '"></span>'
		},
	},

	breakpoints: {
		480: {
			slidesPerView: 1.4,
			slidesPerGroup: 1,
		},
	},

	observer: true,
	observeParents: true,
	observeSlideChildren: true,
});

cardsCruisePhotosSwiper.on('slideChange', renderZeroPagination.bind(cardsCruisePhotosSwiper));

function renderZeroPagination() {
	let pag = this.pagination.el
	let count = +pag.querySelector('span').innerHTML
	if (count < 10) {
		this.pagination.el.innerHTML =
			`<span class="swiper-pagination-current">0${count}</span>`
	}
}