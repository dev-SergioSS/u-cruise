let regionBlocks = document.querySelectorAll('.region-block')

regionBlocks.forEach(el => {
	let elSlider = `.${el.classList[1]} .cards-port__swiper`
	let elBtnNext = `.${el.classList[1]} .cards-port__btn-next`
	let elBtnPrew = `.${el.classList[1]} .cards-port__btn-prew`
	let elScrollbar = `.${el.classList[1]} .cards-port__swiper-scrollbar`
	let elPag = `.${el.classList[1]} .cards-port__swiper-pagination`

	initSlider(elSlider, elBtnNext, elBtnPrew, elScrollbar, elPag)
})

function initSlider(elSlider, elBtnNext, elBtnPrew, elScrollbar, elPag) {

	const sliderPort = new Swiper(elSlider, {
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
			480: {
				slidesPerView: 2.3,
				slidesPerGroup: 2,
			},
			768: {
				slidesPerView: 3.2,
				slidesPerGroup: 3,
			},
		},

		observer: true,
		observeParents: true,
		observeSlideChildren: true,
	});

	sliderPort.on('slideChange', () => renderZeroPagination.bind(sliderPort));

	function renderZeroPagination() {
		let pag = this.pagination.el
		let count = +pag.querySelector('span').innerHTML
		if (count < 10) {
			this.pagination.el.innerHTML =
				`<span class="swiper-pagination-current">0${count}</span>`
		}
	}
}


//^ show/hide sliders  
let blocksInfo = document.querySelectorAll('.region-block__info')
let buttonsVisibleSliders = document.querySelectorAll('.ports__btn-more')

buttonsVisibleSliders.forEach(el => {
	el.addEventListener('click', (e) => {
		let parent = e.target.closest('.region-block__info')
		if (parent.classList.contains('open')) {
			parent.classList.remove('open')
		} else {
			blocksInfo.forEach(el => el.classList.remove('open'))
			parent.classList.add('open')
		}
	})
})
