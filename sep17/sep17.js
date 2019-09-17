let passes = 0;
let score = 0;
let misses = 0;
let shot = Math.floor(Math.random()*10 + 1);
console.log(shot);

updateScore = () =>{
  $("#gameScore").html(`<h2>Score: ${score} || Misses: ${misses}</h2>`);
};

$("#pass").on("click", function(e){
  e.preventDefault();
  passes++;
  console.log(passes);
  $("#passingStats").html(`<h4>You've passed ${passes} times.</h4>`);
  if(passes>shot){
    misses++;
    Swal.fire({
      title: 'You lost possession!',
      text: 'You got too fancy with the ball/puck and the other team stole it...',
      type: 'error',
      confirmButtonText: 'Welp.'
    });
    newShot();
    updateScore()
  }
});

function newShot(){
  passes = 0;
  shot = Math.floor(Math.random() * 10 + 1);
  console.log(shot)
  $("#passingStats").html(``)
}



$("#shoot").on("click", function(e){
  e.preventDefault();
  if(passes===shot){
    score++;
    Swal.fire({
      title: 'You Scored!',
      type: 'success',
      confirmButtonText: 'Cool'
    });
    newShot();
    updateScore();
  }
  else{
    misses++;
    Swal.fire({
      title: 'You Missed!',
      text: `Your shot missed the target!`,
      type: 'error',
      confirmButtonText: 'Cool'
    });
    newShot();
    updateScore();
  };
});