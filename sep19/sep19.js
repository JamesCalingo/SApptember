let score1 = 0;
let score2 = 0;
let score3 = 0;
let score4 = 0;
let score5 = 0;
let score6 = 0;

$("#p1Score").html(score1);
$("#p2Score").html(score2);
$("#p3Score").html(score3);
$("#p4Score").html(score4);
$("#p5Score").html(score5);
$("#p6Score").html(score6);

function updateScores(){
$("#p1Score").html(score1);
$("#p2Score").html(score2);
$("#p3Score").html(score3);
$("#p4Score").html(score4);
$("#p5Score").html(score5);
$("#p6Score").html(score6);
};


$("#p1ScoreUp").on("click", function (event){
  event.preventDefault();
  score1++;
  updateScores();
});

$("#p1ScoreDn").on("click", function (event){
  event.preventDefault();
  score1--;
  updateScores()
})

$("#p2ScoreUp").on("click", function (event){
  event.preventDefault();
  score2++;
  updateScores()
})

$("#p2ScoreDn").on("click", function (event){
  event.preventDefault();
  score2--;
  updateScores()
})

$("#p3ScoreUp").on("click", function (event){
  event.preventDefault();
  score3++;
  updateScores()
})

$("#p3ScoreDn").on("click", function (event){
  event.preventDefault();
  score3--;
  updateScores()
})

$("#p4ScoreUp").on("click", function (event){
  event.preventDefault();
  score4++;
  updateScores()
})

$("#p4ScoreDn").on("click", function (event){
  event.preventDefault();
  score4--;
  updateScores()
})

$("#p5ScoreUp").on("click", function (event){
  event.preventDefault();
  score5++;
  updateScores()
})

$("#p5ScoreDn").on("click", function (event){
  event.preventDefault();
  score5--;
  updateScores()
})

$("#p6ScoreUp").on("click", function (event){
  event.preventDefault();
  score6++;
  updateScores()
})

$("#p6ScoreDn").on("click", function (event){
  event.preventDefault();
  score6--;
  updateScores()
})