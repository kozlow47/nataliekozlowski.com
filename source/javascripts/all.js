$(document).ready(function() {
  // Instantiate MixItUp:
  $(".previewContainer").mixItUp();

  var year = new Date().getFullYear();
  $(".year").text(year);

  $(".toTop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $(".filterNav li").click(function() {
    $(".filterNav li").removeClass("active");
    $(this).addClass("active");
  });
});// document.ready