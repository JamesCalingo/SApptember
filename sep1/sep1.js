let counter=0;
$(".btn").on("click", function(event){
  event.preventDefault();
  counter++
  if (counter===1){
  Swal.fire(
    'Good job!',
    'You clicked the button!',
    'success'
  );
  };
  console.log(counter);
  if(counter===2){
    Swal.fire(
      'Good job!',
      'You clicked the button again!',
      'success'
    );
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
    Swal.fire(
      'You must really like clicking the button, huh?',
      "Well, I've got some bad news: this is the last thing that will happen",
    );
  };
  if(counter===20){
    $("#buttonzone").html("You seriously clicked the button THAT many times? Wow.");
  };
});