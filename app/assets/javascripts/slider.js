function setSliderButtonListener(){
  $('.slider-button').click(function(e){
    var buttonType = e.currentTarget.classList[0];
    var $slides = $(e.currentTarget.parentElement.nextElementSibling.firstElementChild);

    if (buttonType === "prev-button"){
      $slides.animate({
        marginLeft: '+=720'
      }, 500);
    } else if (buttonType === "next-button"){
      $slides.animate({
        marginLeft: '-=720'
      }, 500);
    }
  });
}

$(document).ready(function(){
  setSliderButtonListener();
});
