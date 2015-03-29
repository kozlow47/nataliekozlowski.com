$(document).ready(function() {
  var year = new Date().getFullYear();
  $(".year").text(year);

  $(".toTop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $(".holder").mouseover(function() {
    $(this).children("span").fadeIn(300);
  });

  $(".holder").mouseleave(function() {
    $(this).children("span").fadeOut(300);
  });
});// document.ready