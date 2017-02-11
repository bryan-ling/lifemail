function main(){
	$('.planSingle').hover(function(){
		$(this).find('.planHidden').stop().slideToggle(250);
		$(this).find('.plansrow #familyLogo').toggleClass('familyLogohover');
		
	});
	
	
};

$(document).ready(main);
