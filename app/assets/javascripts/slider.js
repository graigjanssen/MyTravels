function setSliderButtonListener(){
  $('.slider-button').click(function(e){
    var buttonType = e.currentTarget.classList[0];
    var $slides = $(e.currentTarget.parentElement.nextElementSibling.firstElementChild);

    if (buttonType === "prev-button"){
      $slides.animate({
        marginLeft: '+=720'
      }, 350);
    } else if (buttonType === "next-button"){
      $slides.animate({
        marginLeft: '-=720'
      }, 350);
    }
  });
}

$(document).ready(function(){
  setSliderButtonListener();
});
