$(document).ready(function(){
	(function($) {
		$('#header-icon').click(function(e){
			e.preventDefault();
			$('body').toggleClass('is-sidebar');
		});
	})(jQuery);
    
    $('.user-item').on('click',function(){
		$(this).toggleClass('user-item-active');
	}); 
});