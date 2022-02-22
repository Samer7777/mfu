$(window).scroll(function () {
  if ($(window).scrollTop() >= 1) {
    $(".stic").addClass("fixed_2 animated  fadeInDown");
    $(".sticky").addClass("fixed-top  ");
    $(".center_div").addClass("center_div_d-none");
  } else {
    $(".stic").removeClass("fixed_2 animated  fadeInDown");
    $(".sticky").removeClass("fixed-top ");
    $(".center_div").removeClass("center_div_d-none");
  }
});
