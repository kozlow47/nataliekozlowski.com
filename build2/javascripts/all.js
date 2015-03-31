$(document).ready(function() {
  var year = new Date().getFullYear();
  $(".year").text(year);

  $(".toTop").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});// document.ready
;
