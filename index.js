$("#email").focus(function() {
  $(".dotted-border-container").css("outline", "3px dotted rgb(83, 228, 155)");
});

$("#email").blur(function() {
  $(".dotted-border-container").css("outline", "3px dotted transparent");
});


// que desaparezca el label cuando haya algo escrito en el input
$("#email").on("input", function(e) {
  if ($(e.currentTarget).val() != 0) {
    $(".label-email").hide();
  } else {
    $(".label-email").show();
  }
});