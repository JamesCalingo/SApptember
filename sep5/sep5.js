let away = 0;
let home = 0;
let down = 1;
let distance = 10;
let buttonPress;
$("#down").html(`Down: ${down}`)
$("#distance").html(`Yards to go: ${distance}`)
$(".awayscore").html(away)
$(".homescore").html(home)

$(".scorebtna").on("click", function (event) {
  event.preventDefault();
  buttonPress = parseInt($(this).attr("data-attribute"))
  away += buttonPress;
  console.log(away)
  $(".awayscore").html(away)
})

$(".scorebtnh").on("click", function (event) {
  event.preventDefault();
  buttonPress = parseInt($(this).attr("data-attribute"))
  home += buttonPress;
  console.log(home)
  $(".homescore").html(home)
})

$("#changedown").on("click", function (event) {
  event.preventDefault();
  down++;
  $("#down").html(`Down: ${down}`);
  if (down > 4) {
    down = 1;
    $("#down").html(`Down: 1`);
  }
})

$("#firstdown").on("click", function (event) {
  event.preventDefault();
  down = 1;
  distance = 10;
  $("#down").html(`Down: 1`);
  $("#distance").html(`Yards to go: 10`)

})

$("#addyds").on("click", function(){
  distance++;
  $("#distance").html(`Yards to go: ${distance}`)
})

$("#subyds").on("click", function(){
  distance--;
  $("#distance").html(`Yards to go: ${distance}`)
})

$("#reset").on("click", function () {
  away = 0;
  home = 0;
  down = 1;
  distance = 10;
  $("#down").html(`Down: ${down}`)
  $("#distance").html(`Yards to go: ${distance}`)
  $(".awayscore").html(away)
  $(".homescore").html(home)
})