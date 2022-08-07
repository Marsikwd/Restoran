// butger
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.burg_menu');
const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', () => {
		menu.classList.toggle('active')
	})
}

