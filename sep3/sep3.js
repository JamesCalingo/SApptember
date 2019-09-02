var counter = 0;
$(document).on("click", function (event){
  event.preventDefault();
  counter++;
  console.log(counter)
  if(counter===1){
  $("#magiczone").append("Now, I want you do do something.<br>");
  $("#continue").append("(click the page to continue.)")
  }
  if(counter === 2){
    $("#magiczone").append("You should have a new number right now. Take that number")
  }
})