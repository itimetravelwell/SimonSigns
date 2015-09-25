// when you "click" signin, "fadein" "modal"
$('.signin')//if this than that
	.on('click', function() {
		$('.modal').fadeIn("slow");
});//This works now dont touch or combine until you know it works.


//IF THIS THAN THAT
//IF "click" ".close" than "close" ".modal"

$('.close')
	.on('click', function(){
		$('.modal').fadeOut("slow");
});//DONT TOUCH

$('.submit')
	.on('click', function(){
		$('input').addClass("error");//dont use the comma for non class shit
	});

$('input')
	.on('mouseover', function(){
		$('input').removeClass("error")
	});//DO NOT TOUCH

