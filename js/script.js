// $(document).ready(function () {
// 	$('.header__burger').click(function (event) {
// 		$('.header__burger,.header__menu').toggleClass('.active');
// 		// $('body').toggleClass('lock');
// 	})
// });
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.header__list').click(function (event) {
		$('.header__burger,.header__menu').removeClass('active');
		$('body').removeClass('lock');
	});
	$('.slider').slick({
		adaptiveHeight: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		speed: 1000,
		easing: 'ease',
		autoplay: true,
		responsive: [
			{
				breakpoint: 1021,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 851,
				settings: {
					slidesToShow: 2,
					arrows: false,
					dots: true,
				}
			},
			{
				breakpoint: 630,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					dots: true,
				}
			},
		]
	});
})
