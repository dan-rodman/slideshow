var slidercount = 0;
var slidernext = 1;

$(document).ready(function(){
	$("#slider>img#0").fadeIn(300);
	startslider();
});

function startslider(){
	var count = 3;

	
	loop = setInterval(function(){

		$("#slider > img").fadeOut(300);
		$("#slider > img#" + slidernext).fadeIn(300);
		slidercount = slidernext;
		slidernext = slidernext + 1;
		if (slidernext > count){
			slidernext = 0;
			slidercount = 0;
		}
		},3000);
};

function pre(){
	var newSlide = slidercount - 1;
	showSlide(newSlide);

};

function nex(){
	var newSlide = slidercount + 1;
	showSlide(newSlide);

};

function showSlide(id){
	var count = 3;

	if (id > count){
		id = 0;
	}
	else if (id < 0){
		id = count;	
	}
		
	$("#slider > img").fadeOut(300);
	$("#slider > img#" + id).fadeIn(300);
	
	slidercount = id;
	slidernext = id + 1;
	
};







