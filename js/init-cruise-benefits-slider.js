const cardsBenefitsSwiper = new Swiper('.cards-benefits__swiper', {

	speed: 400,
	slidesPerView: 1.2,
	slidesPerGroup: 1,

	navigation: {
		nextEl: '.cards-benefits__btn-next',
		prevEl: '.cards-benefits__btn-prew',
	},

	scrollbar: {
		el: '.cards-benefits__swiper-scrollbar',
		draggable: true,
	},


	pagination: {
		el: '.cards-benefits__swiper-pagination',
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

cardsBenefitsSwiper.on('slideChange', renderZeroPagination.bind(cardsBenefitsSwiper));

function renderZeroPagination() {
	let pag = this.pagination.el
	let count = +pag.querySelector('span').innerHTML
	if (count < 10) {
		this.pagination.el.innerHTML =
			`<span class="swiper-pagination-current">0${count}</span>`
	}
}