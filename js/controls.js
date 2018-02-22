$(window).ready(function() {
	$('.center-menu .list-inline li a, header a').click(function(e) {
		e.preventDefault();
		$.scrollTo(this.hash || 0,800);
	});
});