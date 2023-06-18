let width = window.innerWidth;
let navbar = document.getElementsByTagName('nav');
let kenny = document.getElementsByClassName('kenny');
let know = document.getElementsByClassName('know');
let navlinks = document.querySelector('.navlinks');
let links = document.querySelectorAll('.links');
let menu = document.getElementsByClassName('fa-bars');
let close = document.getElementsByClassName('fa-xmark');

window.onload = function () {
	if (width <= 768) {
		links.forEach((i) => {
			i.addEventListener('click', () => {
				navlinks.classList.remove('navactive');
				close[0].style.display = 'none';
				menu[0].style.display = 'block';
			});
		});
	}
};

window.addEventListener('scroll', () => {
	if (window.scrollY > 100 && width < 481) {
		navbar[0].style.padding = '15px';
		navbar[0].style.background = '#6E07F3';
		kenny[0].style.color = '#fd7f00';
	} else if (window.scrollY > 100 && width <= 768 && width > 481) {
		navbar[0].style.padding = '15px 30px';
		navbar[0].style.background = '#6E07F3';
		kenny[0].style.color = '#fd7f00';
	} else if (window.scrollY > 100 && width > 768) {
		navbar[0].style.background = '#6E07F3';
		navbar[0].style.padding = '15px 50px';
        kenny[0].style.color = '#fd7f00';
		links.forEach((i) =>
			i.addEventListener('mouseover', () => {
				i.style.color = 'white';
			})
		);
    //#fd7f00
    } else if (window.scrollY < 100 && width <= 768) {
		navbar[0].style.background = 'none';
		navbar[0].style.padding = '15px`';
		kenny[0].style.color = '#6E07F3';
	} else if (window.scrollY < 100 && width > 768) {
		navbar[0].style.background = 'none';
		navbar[0].style.padding = '30px 50px';
        kenny[0].style.color = '#6E07F3';
		links.forEach((i) =>
			i.addEventListener('mouseover', () => {
				i.style.color = '#6E07F3';
			})
		);
		links.forEach((i) =>
			i.addEventListener('mouseleave', () => {
				i.style.color = 'white';
			})
		);
    } else {
		navbar[0].style.padding = '15px';
		navbar[0].style.background = 'none';
	}
	if (window.scrollY > 500) {
		know[0].style.display = 'none';
	} else {
		know[0].style.display = 'unset';
	}
    window.scrollY >= screen.availHeight
    ? (arrowup[0].style.display = 'block')
    : (arrowup[0].style.display = 'none');
});

function pressMenu() {
	navlinks.classList.add('navactive');
	close[0].style.display = 'block';
	menu[0].style.display = 'none';
}
function pressClose() {
	navlinks.classList.remove('navactive');
	close[0].style.display = 'none';
	menu[0].style.display = 'block';
}