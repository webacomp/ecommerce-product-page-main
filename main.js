const btnOpen = document.getElementById('open');
const btnClose = document.getElementById('close');

const btns = document.getElementById('btns');
const nav = document.getElementById('nav');
const cartBtn = document.getElementById('cart-btn');

const shoppingCard = document.getElementById('shopping-card')

console.log(shoppingCard)

console.log(cartBtn)

const siteNav = document.getElementById('mobile-nav');

const btnMinus = document.getElementById('btn-minus')
const btnPlus = document.getElementById('btn-plus')
const number = document.getElementById('number')
let content = ''


btnOpen.addEventListener('click', (_) => {
	siteNav.classList.add('close');
	document.body.classList.add('overlay')
});
btnClose.addEventListener('click', (_) => {
	siteNav.classList.remove('close');
	document.body.classList.remove('overlay')
});

	


cartBtn.addEventListener('click', _ => {
	shoppingCard.classList.toggle('open')
})

btnMinus.addEventListener('click', _ => {
	number.innerText--

	if (number.innerText <= 0) {
		number.innerText = 0
	}
})
btnPlus.addEventListener('click', _ => {
	number.innerText++
})
// const hamburgerMenuCloseOpen = function () {
// 	let img = document.querySelector('.open');
// 	const src = img.getAttribute('src');

// 	if (src === 'images/icon-menu.svg') {
// 		img.setAttribute('src', 'images/icon-close-menu.svg');
// 	} else {
// 		img.setAttribute('src', 'images/icon-menu.svg');
// 	}
// };

// const changeIconArrow = function () {
// 	const src = arrowUp.getAttribute('src');

// 	if (src === 'images/icon-arrow-up.svg') {
// 		arrowUp.setAttribute('src', 'images/icon-arrow-down.svg');
// 		arrowDown.setAttribute('src', 'images/icon-arrow-down.svg');
// 	}
// 	if (src === 'images/icon-arrow-down.svg') {
// 		arrowUp.setAttribute('src', 'images/icon-arrow-up.svg');
// 		arrowDown.setAttribute('src', 'images/icon-arrow-up.svg');
// 	}
// };
