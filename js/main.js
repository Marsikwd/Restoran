// butger
const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.burg_menu');
const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener('click', () => {
		menu.classList.toggle('active')
	})
}


var t;

function up() {
	var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
	if (top > 0) {
		window.scrollBy(0, ((top + 100) / -10));
		t = setTimeout('up()', 20);
	} else clearTimeout(t);
	return false;
}
window.addEventListener('scroll', function () {
	arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
});