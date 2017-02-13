var show = function() {
    $('.menu').animate({left: "0px"}, 200);
    $('body').animate({left: "285px"}, 200);
}
var hide = function() {
    $('.menu').animate({left: "-285px"}, 200);
    $('body').animate({left: "0px"}, 200);
}
var main = function() {
  $('.pull-left').click(show);
  $('.icon-close').click(hide);
  /*$(document).keypress(function(event){
    if (event.which === 109) {
        if ($('.menu').css('left')=='0px')
          hide();
        else
          show();
    }
  });*/
  $("#menu-signup").click(function(){
    hide();
    $("#signup,.overlay").fadeToggle();
  });
  $("#menu-login").click(function(){
    hide();
    $("#login,.overlay").fadeToggle();
  });
  $("#menu-contact").click(function(){
    hide();
    $("#contact-us,.overlay").fadeToggle();
  });
  $("#pop-close").click(function(){
    $("#login,#signup,#contact-us,#about,.overlay").fadeOut();
  });
  $("#frm-lin-link").click(function(){
    $("#signup").fadeOut();
    $("#login").fadeIn();
  });
  $("#frm-sin-link").click(function(){
    $("#login").fadeOut();
    $("#signup").fadeIn();
  });
  $("#sup").click(function(){
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    $("#signup,.overlay").fadeToggle();
  });
  $("#log").click(function(){
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    $("#login,.overlay").fadeToggle();
  });
  $("#cus").click(function(){
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    $("#contact-us,.overlay").fadeToggle();
  });
  $(".glyphicon-chevron-up").click(function(){
    $('html,body').animate({ scrollTop: 0 }, 'slow');
  });
};
$(document).ready(main);