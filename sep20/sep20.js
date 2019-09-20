let roll = Math.floor(Math.random()*20 + 1);

$(".btn").on("click", function(event){
  event.preventDefault();
  roll = Math.floor(Math.random()*20 + 1);
  $("#dieRoll").html(roll);
})