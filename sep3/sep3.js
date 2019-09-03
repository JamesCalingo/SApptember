var counter = 0;
$(document).on("click", function (event){
  event.preventDefault();
  counter++;
  console.log(counter)

  if(counter===1){
  $("#magiczone").append(`<h3>Now, I want you do a few things.</h3><br>`);
  $("#continue").html("(click the page to continue...but only when you're ready.)");
  }

  if(counter === 2){
    $("#magiczone").append(`<h4>Take your number and multiply it by 9. If the resulting number is two digits, then add those digits together.</h4>`);
  }

  if(counter === 3){
    $("#magiczone").append(`<h4>You should have a single digit number now. Take that and add your choice of either 15 or 36 to it.</h4>`);
  }

  if(counter === 4){
    $("#magiczone").append(`<h4>If your result is odd, divide it by 15. If it's even, divide by 8.</h4>`);
  }

  if(counter === 5){
    $("#magiczone").append(`<h4>This is where things get a little tricky. I want you to think of a color that has as many letters as the number you have right now (for example, if you have 5 as your number, you'd pick a color with three letters such as green).</h4>`);
  };

  if(counter === 6){
    $("#magiczone").append(`<h4>The next time you click, I will turn this entire page to the color you are thinking of.</h4><h1>Ready?</h1>`);
  };

  if(counter===7){
    $("body").css({"background":"red", "color":"white"});
    $("#magiczone").html(`<h1 class="display-4">BAM!</h1><h3>Am I right?`);
    $("#continue").html(`<p>Hope you enjoyed this!</p>`);
  };
})