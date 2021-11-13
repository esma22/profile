
$(window).scroll(function () {
  if ($(this).scrollTop() >= 200) {
    $("#navBar").addClass("noTransparent");
  } else {
    $("#navBar").removeClass("noTransparent");
  }
  $(".circle").circleProgress({
      startAngle: -Math.PI / 2,
      fill: "#0575e6",
    })
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $(this) .find("span").html(Math.round(stepValue * 100) + "%");
    });
    $(function (){
      $("#commentForm").validate();
    });
    
});

