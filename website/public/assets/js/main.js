(function () {

	"use strict";

	//===== Preloader
	window.onload = function () {
		window.setTimeout(fadeout, 200);
	}

	function fadeout() {
		var preloader = document.querySelector('.preloader');
		if (preloader) {
			preloader.style.opacity = '0';
			preloader.style.display = 'none';
		}
	}


	/*=====================================
	Sticky & Back to top
	======================================= */
	window.onscroll = function () {
		var header_navbar = document.querySelector(".navbar-area");
		if (header_navbar) {
			var sticky = header_navbar.offsetTop;

			if (window.pageYOffset > sticky) {
				header_navbar.classList.add("sticky");
			} else {
				header_navbar.classList.remove("sticky");
			}
		}

		// show or hide the back-to-top button
		var backToTop = document.querySelector(".scroll-top");
		if (backToTop) {
			if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
				backToTop.style.display = "block";
			} else {
				backToTop.style.display = "none";
			}
		}
	};


	//===== navbar-toggler
	let navbarToggler = document.querySelector(".navbar-toggler");
	if (navbarToggler) {
		navbarToggler.addEventListener('click', function () {
			navbarToggler.classList.toggle("active");
		});
	}


	//======== tiny slider
	var clientCarousel = document.querySelector('.client-logo-carousel.tns-slider');
	if (typeof tns !== 'undefined' && clientCarousel && clientCarousel.children && clientCarousel.children.length > 0) {
		tns({
			container: clientCarousel,
			slideBy: 'page',
			autoplay: true,
			autoplayButtonOutput: false,
			mouseDrag: true,
			gutter: 15,
			nav: false,
			controls: false,
			responsive: {
				0: {
					items: 1,
				},
				540: {
					items: 2,
				},
				768: {
					items: 3,
				},
				992: {
					items: 4,
				}
			}
		});
	}


	//WOW Scroll Spy
	if (typeof WOW !== 'undefined') {
		var wow = new WOW({
			mobile: false
		});
		wow.init();
	}

	//====== counter up 
	if (typeof counterUp !== 'undefined' && document.querySelector('.countup')) {
		var cu = new counterUp({
			start: 0,
			duration: 2000,
			intvalues: true,
			interval: 100,
		});
		cu.start();
	}

	//======= portfolio-btn active
	var elements = document.getElementsByClassName("portfolio-btn");
	if (elements && elements.length > 0) {
		for (var i = 0; i < elements.length; i++) {
			elements[i].onclick = function () {
				var el = elements[0];
				while (el) {
					if (el.tagName === "BUTTON") {
						el.classList.remove("active");
					}
					el = el.nextSibling;
				}
				this.classList.add("active");
			};
		}
	}

})();