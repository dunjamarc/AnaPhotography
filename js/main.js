var main = function(){
	$('.dropdown>a').mouseenter(function(){
		$('.dropdown-menu').show();
	});
	$('.dropdown-menu').mouseleave(function(){
		$('.dropdown-menu').hide();
	});

	//modal window//
	$(".grouped_elements").fancybox({
		padding : 0,
		helpers : { 
          overlay: {
            css: {'background-color': 'rgba(0, 0, 0, .7)'}
          }, 
          title: {
            type: 'outside'
          } 
        }
	});
};

$(document).ready(main);