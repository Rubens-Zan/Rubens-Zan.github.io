import projects from "../../projects.js";

$(function () {

	/*Slider Projetos */
	const delay = 500;
	let curIdx = 0;
	let nProjects = projects.length;

	createSlide();
	initBullets();
	handleSlideClick();
	handleSlideArrowClick();

	/**
	 * @function createSlide
	 * @summary Function used to create the projects slide using the projects array
	 */
	function createSlide() {
		for (let i = 0; i < projects.length; i++) {
			const curProject = projects[i];
			let imgLink = "";
			if (curProject.staticPath){
				imgLink += "../../public/images/" + curProject.img;
			}else {
				imgLink += curProject.img;
			}
			$('.slide').append(
				`
				<div class="sobre-projeto">
					<div class="titulo-projeto">
						<div class="wraper-titulo-projeto">
							<h2>${curProject.title}</h2>
							<p>Linguagens utilizadas: ${curProject.languages} </p>
						</div><!--wraper-titulo-projeto-->
					</div><!--titulo-projeto-->
					<div class="texto-projeto">
						<p>${curProject.description}
						</p>
						<br>
						<p>Para saber mais <a href=${curProject.link}>clique aqui. </a></p>
						<div class="imagens-projeto">
							<img src=${imgLink} />
						</div>
					</div><!--texto-projeto-->
				</div><!--sobre-projeto-->`
			);
		}
	}

	/**
	 * @function initBullets
	 * @summary Function to init the slides
	 */
	function initBullets() {
		for (let i = 0; i < nProjects; i++) {
			//  initializing the first bullet as selected
			if (i == 0) {
				$('.slider-bullets').append('<span style="background: var(--sidebar-contrast-color);"></span>');
			} else {
				$('.slider-bullets').append('<span></span>');
			}
		}
		$('.sobre-projeto').eq(0).fadeIn();

	}

	/**
	 * @function handleSlideClick
	 * @summary Function to handle the slide click altering the current slide
	 */
	function handleSlideClick() {
		$('.slider-bullets span').click(function () {
			changeSlide($(this));
		});
	}

	/**
	 * @function changeSlide
	 * @summary Function to alter the cur active slide
	 * @param {obj} nextSlide - The jquery object from the next slide  
	 */
	function changeSlide(nextSlide){
		$('.sobre-projeto').eq(curIdx).stop().fadeOut(delay);
		curIdx = nextSlide.index();
		$('.sobre-projeto').eq(curIdx).stop().fadeIn(delay);
		$('.slider-bullets span').css('background-color', 'var(--sidebar-color)');
		nextSlide.css('background-color', 'var(--sidebar-contrast-color)');
	}

	/**
	 * @function handleSlideArrowClick
	 * @summary Function to handle an slide arrow click
	 */
	function handleSlideArrowClick(){
		$('.arrows').click(function () {
			const indexClicked = $(this).index();
			let curSlide = curIdx;

			// checking if is a left arrow click
			if (indexClicked == 0){
				if (curSlide == 0){
					curSlide = nProjects-1;
				}else{
					curSlide-=1;
				}
			}else {
				if (curSlide == nProjects-1){
					curSlide=0;
				}else{
					curSlide+=1;
				}	
			}

			const curSlideObj= $('.slider-bullets span').eq(curSlide);
			changeSlide(curSlideObj);
		});
	}
}); 
