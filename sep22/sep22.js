let die1=Math.floor(Math.random()*6+1);
let die2=Math.floor(Math.random()*6+1);
let total = die1 + die2

$(".btn").on("click", function (e){
  e.preventDefault();
  die1=Math.floor(Math.random()*6+1);
  die2=Math.floor(Math.random()*6+1);
  total=die1+die2;

  $("#die1").html(die1);
  $("#die2").html(die2);
  $("#total").html(total);
})