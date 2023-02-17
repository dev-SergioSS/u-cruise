const sliderRecomendCard = new Swiper('.cards-recomend__swiper', {

	speed: 400,
	slidesPerView: 1.2,
	slidesPerGroup: 1,

	navigation: {
		nextEl: '.cards-recomend__btn-next',
		prevEl: '.cards-recomend__btn-prew',
	},

	scrollbar: {
		el: '.cards-recomend__swiper-scrollbar',
		draggable: true,
	},

	pagination: {
		el: '.cards-recomend__swiper-pagination',
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

sliderRecomendCard.on('slideChange', renderZeroPagination.bind(sliderRecomendCard));

function renderZeroPagination() {
	let pag = this.pagination.el
	let count = +pag.querySelector('span').innerHTML
	if (count < 10) {
		this.pagination.el.innerHTML =
			`<span class="swiper-pagination-current">0${count}</span>`
	}
}