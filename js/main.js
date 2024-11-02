; (function () {

	'use strict';



	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var fullHeight = function () {

		if (!isMobile.any()) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function () {
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};


	var counter = function () {
		$('.js-counter').countTo({
			formatter: function (value, options) {
				return value.toFixed(options.decimals);
			},
		});
	};


	var counterWayPoint = function () {
		if ($('#daviefolio-counter').length > 0) {
			$('#daviefolio-counter').waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated')) {
					setTimeout(counter, 400);
					$(this.element).addClass('animated');
				}
			}, { offset: '90%' });
		}
	};

	// Animations
	var contentWayPoint = function () {
		var i = 0;
		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight animated');
							} else {
								el.addClass('fadeInUp animated');
							}

							el.removeClass('item-animate');
						}, k * 200, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '85%' });
	};


	var burgerMenu = function () {

		$('.js-daviefolio-nav-toggle').on('click', function (event) {
			event.preventDefault();
			var $this = $(this);

			if ($('body').hasClass('offcanvas')) {
				$this.removeClass('active');
				$('body').removeClass('offcanvas');
			} else {
				$this.addClass('active');
				$('body').addClass('offcanvas');
			}
		});



	};

	// Click outside of offcanvass
	var mobileMenuOutsideClick = function () {

		$(document).click(function (e) {
			var container = $("#daviefolio-aside, .js-daviefolio-nav-toggle");
			if (!container.is(e.target) && container.has(e.target).length === 0) {

				if ($('body').hasClass('offcanvas')) {

					$('body').removeClass('offcanvas');
					$('.js-daviefolio-nav-toggle').removeClass('active');

				}

			}
		});

		$(window).scroll(function () {
			if ($('body').hasClass('offcanvas')) {

				$('body').removeClass('offcanvas');
				$('.js-daviefolio-nav-toggle').removeClass('active');

			}
		});

	};

	var clickMenu = function () {

		$('#navbar a:not([class="external"])').click(function (event) {
			var section = $(this).data('nav-section'),
				navbar = $('#navbar');

			if ($('[data-section="' + section + '"]').length) {
				$('html, body').animate({
					scrollTop: $('[data-section="' + section + '"]').offset().top - 55
				}, 500);
			}

			if (navbar.is(':visible')) {
				navbar.removeClass('in');
				navbar.attr('aria-expanded', 'false');
				$('.js-daviefolio-nav-toggle').removeClass('active');
			}

			event.preventDefault();
			return false;
		});


	};

	// Reflect scrolling in navigation
	var navActive = function (section) {

		var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function () {
			$(this).find('a[data-nav-section="' + section + '"]').closest('li').addClass('active');
		});

	};

	var navigationSection = function () {

		var $section = $('section[data-section]');

		$section.waypoint(function (direction) {

			if (direction === 'down') {
				navActive($(this.element).data('section'));
			}
		}, {
			offset: '150px'
		});

		$section.waypoint(function (direction) {
			if (direction === 'up') {
				navActive($(this.element).data('section'));
			}
		}, {
			offset: function () { return -$(this.element).height() + 155; }
		});

	};






	var sliderMain = function () {

		$('#daviefolio-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function () {
				setTimeout(function () {
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function () {
				setTimeout(function () {
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

		});

	};

	var stickyFunction = function () {
		var h = $('.image-content').outerHeight(); // Get height of the content

		// Function to apply sticky behavior based on screen width
		function setupSticky() {
			if ($(window).width() <= 992) {
				// Detach the sticky behavior on small screens
				$("#sticky_item").trigger("sticky_kit:detach");
			} else {
				// Set the parent container's height
				$('.sticky-parent').css('height', h);

				// Remove any previous detachments and apply sticky behavior
				$("#sticky_item").stick_in_parent();
			}
		}

		// Initial setup when the page loads
		setupSticky();

		// On window resize, check the width again and update sticky behavior
		$(window).resize(function () {
			var h = $('.image-content').outerHeight(); // Update height dynamically
			$('.sticky-parent').css('height', h);

			setupSticky();
		});
	};


	var owlCrouselFeatureSlide = function () {
		$('.owl-carousel').owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			autoplay: true,
			loop: true,
			margin: 0,
			nav: true,
			dots: false,
			autoHeight: true,
			items: 1,
			navText: [
				"<i class='icon-arrow-left3 owl-direction'></i>",
				"<i class='icon-arrow-right3 owl-direction'></i>"
			]
		})
	};

	// Document on load.
	$(function () {
		fullHeight();
		counter();
		counterWayPoint();
		contentWayPoint();
		burgerMenu();

		clickMenu();
		// navActive();
		navigationSection();
		// windowScroll();


		mobileMenuOutsideClick();
		sliderMain();
		stickyFunction();
		owlCrouselFeatureSlide();
	});


	/* UPDATED*/

	// Ensure the DOM is fully loaded
	window.addEventListener('DOMContentLoaded', function () {
		// Get all filter buttons and the "Load More" button
		const filterButtons = document.querySelectorAll("#workfolio-filter li");

		// Function to adjust height between work-box and finsights-desc for the current filter
		function adjustHeights() {
			// Get the active filter element
			const activeFilterElement = document.querySelector("#workfolio-filter li.active");

			// Check if there's an active filter element
			if (activeFilterElement) {
				const activeFilter = activeFilterElement.getAttribute('data-filter');

				// Get the filtered elements that are visible
				const workBox = document.querySelector(`.workfolio-item${activeFilter} .work-box`);
				const finsightsDesc = document.querySelector(`.workfolio-item${activeFilter} .finsights-desc`);

				// Ensure both elements are found for the active filter
				if (workBox && finsightsDesc) {
					// Reset heights before recalculating
					workBox.style.height = 'auto';
					finsightsDesc.style.height = 'auto';

					// Get their heights
					const workBoxHeight = workBox.offsetHeight;
					const finsightsDescHeight = finsightsDesc.offsetHeight;

					// Find the larger height
					const maxHeight = Math.max(workBoxHeight, finsightsDescHeight);

					// Apply the max height to both elements
					workBox.style.height = maxHeight + 'px';
					finsightsDesc.style.height = maxHeight + 'px';
				} else {
					console.warn("One or both elements not found for active filter:", activeFilter);
				}
			} else {
				console.warn("No active filter element found in #workfolio-filter");
			}
		}

		// Event listener for filter buttons
		filterButtons.forEach(button => {
			button.addEventListener("click", function () {
				// Remove active class from all buttons
				filterButtons.forEach(btn => btn.classList.remove("active"));
				// Add active class to the clicked button
				this.classList.add("active");

				// Adjust the heights based on the active filter
				adjustHeights();
			});
		});

		// Adjust heights when the page initially loads
		adjustHeights();
	});





	/*// Ensure the DOM is fully loaded
	window.addEventListener('DOMContentLoaded', function () {
		// Get all filter buttons and the "Load More" button
		const filterButtons = document.querySelectorAll("#workfolio-filter li");

		// Function to adjust height between work-box and finsights-desc for the current filter
		function adjustHeights() {
			// Get the active filter
			const activeFilter = document.querySelector("#workfolio-filter li.active").getAttribute('data-filter');

			// Get the filtered elements that are visible
			const workBox = document.querySelector(`.workfolio-item${activeFilter} .work-box`);
			const finsightsDesc = document.querySelector(`.workfolio-item${activeFilter} .finsights-desc`);

			// Ensure both elements are found for the active filter
			if (workBox && finsightsDesc) {
				// Reset heights before recalculating
				workBox.style.height = 'auto';
				finsightsDesc.style.height = 'auto';

				// Get their heights
				const workBoxHeight = workBox.offsetHeight;
				const finsightsDescHeight = finsightsDesc.offsetHeight;

				// Find the larger height
				const maxHeight = Math.max(workBoxHeight, finsightsDescHeight);

				// Apply the max height to both elements
				workBox.style.height = maxHeight + 'px';
				finsightsDesc.style.height = maxHeight + 'px';
			}
		}

		// Event listener for filter buttons
		filterButtons.forEach(button => {
			button.addEventListener("click", function () {
				// Remove active class from all buttons
				filterButtons.forEach(btn => btn.classList.remove("active"));
				// Add active class to the clicked button
				this.classList.add("active");

				// Adjust the heights based on the active filter
				adjustHeights();
			});
		});

		// Adjust heights when the page initially loads
		adjustHeights();
	});
*/
	/*CAN REPLACE UP*/
	/*
	document.addEventListener("DOMContentLoaded", function () {
	// Function to synchronize heights for the current visible items
	function synchronizeHeights() {
		const workBoxes = document.querySelectorAll('.work-box:not(.hidden)');
		const finsightsDescs = document.querySelectorAll('.finsights-desc:not(.hidden)');

		// Reset heights first
		workBoxes.forEach(box => box.style.height = 'auto');
		finsightsDescs.forEach(desc => desc.style.height = 'auto');

		workBoxes.forEach((box, index) => {
			if (finsightsDescs[index]) {
				const workBoxHeight = box.offsetHeight;
				const finsightsDescHeight = finsightsDescs[index].offsetHeight;
				const maxHeight = Math.max(workBoxHeight, finsightsDescHeight);

				// Apply the max height to both elements
				box.style.height = maxHeight + 'px';
				finsightsDescs[index].style.height = maxHeight + 'px';
			}
		});
	}

	// Call the function initially after filtering
	synchronizeHeights();

	// Add event listener to filter menu
	const filterButtons = document.querySelectorAll("#workfolio-filter li");
	filterButtons.forEach(button => {
		button.addEventListener("click", function () {
			setTimeout(synchronizeHeights, 500); // Adjust timing if necessary
		});
	});
});
*/


	/*
		// Ensure the DOM is fully loaded and all resources like images are loaded
		window.addEventListener('load', function () {
			// Get the work-box and insights-desc elements
			const workBox = document.querySelector('.work-box');
			const finsightsDesc = document.querySelector('.finsights-desc');
	
			// Ensure both elements are found
			if (workBox && finsightsDesc) {
				// Get their heights
				const workBoxHeight = workBox.offsetHeight;
				const finsightsDescHeight = finsightsDesc.offsetHeight;
	
				// Find the larger height
				const maxHeight = Math.max(workBoxHeight, finsightsDescHeight);
	
				// Apply the max height to both elements
				workBox.style.height = maxHeight + 'px';
				finsightsDesc.style.height = maxHeight + 'px';
			}
		});
	
	*/
	/*
		// Ensure the DOM is fully loaded before executing the script
		window.onload = function () {
			// Get the work-box and insights-desc elements
			const workBox = document.querySelector('.work-box');
			const finsightsDesc = document.querySelector('.finsights-desc');
	
			// Ensure both elements are found
			if (workBox && finsightsDesc) {
				// Get their heights
				const workBoxHeight = workBox.offsetHeight;
				const finsightsDescHeight = finsightsDesc.offsetHeight;
	
				// Find the larger height
				const maxHeight = Math.max(workBoxHeight, finsightsDescHeight);
	
				// Apply the max height to both elements
				workBox.style.height = maxHeight + 'px';
				finsightsDesc.style.height = maxHeight + 'px';
			}
		};
	*/

}());