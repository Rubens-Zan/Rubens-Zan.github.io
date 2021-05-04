$(function () {

    /*Slider Projetos */

	let indiceAtual = 0;
	let indiceMaximo = $('.sobre-projeto').length;

    // let delay = 5000;
    initSlider();
    cliqueSlider();

	
	function initSlider(){
		 for (let i = 0; i < indiceMaximo; i++){
            if (i == 0) {
                $('.slider-bullets').append('<span style="background:#d194ff;"></span>');
            } else {
                $('.slider-bullets').append('<span></span>');
            }
        }
        $('.sobre-projeto').eq(0).fadeIn();
		
	}
	
	function cliqueSlider() {
		$('.slider-bullets span').click(function () {
			$('.sobre-projeto').eq(indiceAtual).stop().fadeOut(900);
			indiceAtual = $(this).index();
			$('.sobre-projeto').eq(indiceAtual).stop().fadeIn(900);
			$('.slider-bullets span').css('background-color', 'blueviolet');
			$(this).css('background-color', '#d194ff');
		});
	}

}); 