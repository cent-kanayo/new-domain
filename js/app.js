$(document).ready(function () {
  $(window).on("scroll", function () {
    let scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".sticky").addClass("sticky-add");
    } else {
      $(".sticky").removeClass("sticky-add");
    }
  });
});
