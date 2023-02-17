const sliderPlaying = new Swiper('.cards-play__swiper', {

	speed: 400,
	slidesPerView: 1.2,
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

sliderPlaying.on('slideChange', renderZeroPagination.bind(sliderPlaying));

function renderZeroPagination() {
	let pag = this.pagination.el
	let count = +pag.querySelector('span').innerHTML
	if (count < 10) {
		this.pagination.el.innerHTML =
			`<span class="swiper-pagination-current">0${count}</span>`
	}
}


// 

let days = document.querySelectorAll('.days__day');
let daysHead = document.querySelectorAll('.days__day-head');

daysHead.forEach(el => el.addEventListener('click', (e) => {
	e.preventDefault();
	let parent = e.currentTarget.parentElement;
	isOpenParent = parent.open

	if (isOpenParent) {
		parent.open = false
	} else {
		days.forEach((el) => (el.open = false));
		parent.open = true
	}
}))



