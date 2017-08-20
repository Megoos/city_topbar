//regions
$(function(){
  $('.header-city').on('click', function(e){
   e.preventDefault()   
    $('.topbar-regions').slideToggle();
  });

  $('.close').on('click', function(e){
   e.preventDefault()
    $('.topbar-regions').slideUp();
  })
});