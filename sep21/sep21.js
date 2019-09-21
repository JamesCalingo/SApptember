let total = Math.floor(Math.random() * 10 + 1);
let dealer = Math.floor(Math.random() * 8 + 17);
let buttonPress = Math.floor(Math.random() * 10 + 1);
let wins = 0;
let loss = 0;
let draw = 0;

$("#total").html(total);
$("#wins").html(wins);
$("#losses").html(loss);
$("#draws").html(draw);
console.log(dealer)

newHand = () => {
  total = Math.floor(Math.random() * 10 + 1);
  dealer = Math.floor(Math.random() * 8 + 17);
  $("#total").html(total);
  $("#wins").html(wins);
  $("#losses").html(loss);
  $("#draws").html(draw);
  console.log(dealer)
}

$("#hitMe").on("click", function (e) {
  e.preventDefault();
  buttonPress = Math.floor(Math.random() * 10 + 1);
  total += buttonPress;
  $("#total").html(total);

  if (total > 21) {
    Swal.fire({
      title: 'You busted!',
      text: 'You went over 21...',
      type: 'error',
      confirmButtonText: 'Try again'
    })
    loss++
    newHand()
  };
});

$("#stay").on("click", function (e) {
  e.preventDefault();

  if (total > dealer) {
    Swal.fire({
      title: 'You beat the dealer!',
      text: `The dealer drew ${dealer}. You win!`,
      type: 'success',
      confirmButtonText: 'Try again'
    })
    wins++;
    newHand();
    return false
  }

  if(dealer > 21){
    Swal.fire({
      title: 'The dealer busted!',
      text: 'The dealer went over 21, so you win!',
      type: 'success',
      confirmButtonText: 'Try again'
    });
    wins++;
    newHand();
    return false
  }

  if(dealer > total){
    Swal.fire({
      title: 'The dealer beat you!',
      text: `The dealer drew ${dealer}. You lost!`,
      type: 'error',
      confirmButtonText: 'Try again'
    });
    loss++;
    newHand();
    return false
  }

if(total = dealer){
  Swal.fire({
    title: 'A tie game?',
    text: `The dealer drew ${dealer}. You and the dealer tied!`,
    type: 'warning',
    confirmButtonText: 'Try again'
  });
  draw++;
  newHand();
}  
});