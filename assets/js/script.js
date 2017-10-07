$(document).ready(function(){
	$('.slide-left').owlCarousel({
    items:2,
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});

$('.slide-up').owlCarousel({
	loop: true,
	autoplay: true,
	items: 1,
	nav: true,
	navText:['&#x27;next&#x27;','<i class="fa fa-angle-up" aria-hidden="true"></i>'],
	autoplayHoverPause: true,
	animateOut: 'slideOutUp',
	animateIn: 'slideInUp'
});



});