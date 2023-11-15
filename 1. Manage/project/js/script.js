const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');
const primaryHeader = document.querySelector('.primary-header');

navToggle.addEventListener('click', () => {
	primaryNav.hasAttribute('data-visible')
		? navToggle.setAttribute('aria-expanded', 'close')
		: navToggle.setAttribute('aria-expanded', 'open');
	// primaryNav.classList.toggle('opened');	// Добавляем класс
	primaryNav.toggleAttribute('data-visible'); // Добавляем атрибут
	primaryHeader.toggleAttribute('data-overlay');
});

// window.addEventListener('resize', () => {
// 	console.log(1);
// });
