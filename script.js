$(document).ready(function () {
  $("h1").css("color", "blue");
  $("#box1").css("background-color", "lightblue");
  $(".boxes").css("color", "blue");

  $(".boxes:first").css("color", "red");
  $(".boxes:last").css("background-color", "red");
  $(".boxes:last").css("color", "white");

  $(document).click(function () {
    $("h1").css("color", "red");
  });

  $("#box1").mouseenter(function () {
    $("#box1").css("color", "green");
  });

  $(".boxes").mouseleave(function () {
    $(this).css("background-color", "blue");
  });

  $(".boxes").mouseenter(function () {
    $(this).css("background-color", "yellow");
  });
});
