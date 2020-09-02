let coin = ["Heads", "Tails"];
let rando = Math.floor(Math.random() * 2);
let coinChoice = coin[rando];
console.log(coinChoice);
let userChoice;
let streak = 0;

function newGame(){
  rando = Math.floor(Math.random() * 2);
  coinChoice = coin[rando];
  console.log(coinChoice);
};

$(".gamebtn").on("click", function (event){
  event.preventDefault();
  userChoice = $(this).attr("data-attribute");
  $("#results").html(`You called: ${userChoice}<br>
  The coin came up... ${coinChoice}`);
  if(userChoice === coinChoice){
    streak++;
    $("#winlose").html(`You win!`);
    if(streak > 1){
      $("#winlose").html(`You win!<br>You've won ${streak} times in a row!`)
    }
   
  }
  else{
    $("#winlose").html("You lose!");
    streak = 0
  };
  newGame();
})

$("#cheat").on("click", function (event){
  event.preventDefault();
  alert("You found the secret button! As a reward, I'll let you in on a secret developer trick (though you may know this already if you found this):\nRight click the page, select 'Inspect', and then go to 'Console'. Try picking what shows up in the list you see!")
})