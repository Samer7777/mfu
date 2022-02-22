$(".navbar-toggler").click(function () {
  $(".navbar-collapse").remove("collapse");
  $(".navbar-collapse").addClass("showing");
  $(".navbar-collapse").remove("showing");
});
