let results = ["Yes.", "It is certain.", "Definitely.", "Without a doubt.", "Most likely.", "Not too sure...", "Ask again later.", "Probably.", "Probably not.", "No."];
let answer = results[Math.floor(Math.random() * 10)];
console.log(answer);
let question =

$(".btn").on("click", function (event){
  event.preventDefault();
  question = $("#question-input").val().trim();
  answer = results[Math.floor(Math.random() * 10)];
  $("#question").html(`<h2>So...your question is: "${question}".<br>My answer is...</h2>`);
  $("#answer").html(`${answer}`);
  $("#askagain").html("Feel free to ask another question.")
})