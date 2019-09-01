let counter=0;
$(".btn").on("click", function(event){
  event.preventDefault();
  counter++
  if (counter===1){
  alert("You clicked the magic button!");
  };
  console.log(counter);
  if(counter===2){
    alert("You clicked it again!");
  };
  if(counter===3){
    $("body").css("background", "red");
  };
  if(counter===4){
    $("body").css("color", "violet");
  };
  if(counter===5){
    $("body").css({"background":"orange", "color":"blue"});
  };
  if(counter===6){
    $("body").css({"background":"yellow", "color":"green"});
  };
  if(counter===7){
    $("body").css({"background":"green", "color":"yellow"});
  };
  if(counter===8){
    $("body").css({"background":"blue", "color":"orange"});
  };
  if(counter===9){
    $("body").css({"background":"violet", "color":"red"});
  };
  if(counter===10){
    $("body").css({"background":"black", "color":"white", "font-family":"fantasy"});
    alert("Okay I'm tired of this now. Keep clicking if you want, but nothing else will happen.");
  };
  if(counter===20){
    $("#buttonzone").html("You seriously clicked the button THAT many times? Wow.");
  };
});