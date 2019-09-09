let pitch = Math.floor(Math.random() * 4);
let swing;
let ball = 0;
let strike = 0;
let outs = 0;
let runners = 0;
let runs = 0;

$(".btn").on("click", function (event) {
  event.preventDefault();
  pitch = Math.floor(Math.random() * 4);
  console.log(pitch);
  swing = $(this).attr("data-attribute");
  console.log(swing);

  if (pitch < 2 && swing == 1 || ball === 4) {
    runners++;
    ball = 0;
    strike = 0;
  };

  if (pitch > 2 && swing == 0) {
    ball++;
  };

  if (pitch > 1 && swing == 1 || pitch < 2 && swing == 0) {
    strike++;
  };

  if (strike === 3) {
    outs++;
    strike = 0;
    ball = 0;
  };

  if (runners === 1) {
    $("#bases").html(`<h2>Runner on 1st</h2>`)
  }

  if (runners === 2) {
    $("#bases").html(`<h2>Runners on 1st and 2nd</h2>`)
  }

  if (runners === 3) {
    $("#bases").html(`<h1>Bases loaded</h1>`)
  }

  if (runners > 3 && pitch < 2 && swing == 1 || runners > 3 && ball === 4) {
    runs++
  }

  $("#game").html(`<h2>Runs Scored: ${runs}<br>Balls: ${ball}||Strikes: ${strike}||Outs: ${outs}</h2>`);

  if (outs === 3) {
    $(".results").html("We lost! better luck next time...")
  };

  if (runs === 11) {
    $(".results").html("We won!")
  }
})