$(document).ready(function(){
  $('.toogle').click(function(){
	$('header nav ul').toggleClass('active');
	});

  $(document).scroll(function(){
  	$('header').css({'top':'-129px'});
  });
 
 $('ul li a').click(function(){
   $(this).next('ul').toggleClass('visible');
 });


});
	