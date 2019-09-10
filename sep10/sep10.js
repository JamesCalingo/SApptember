$("#button1").on("click", function(event){
  event.preventDefault();
  $("#response").html("Well...I'm very sorry to hear that. Don't worry about me, though, I'll be fine. It's not like I'm seriously hurt by your response or anything. It's just that...I was thinking about a really sad anime I saw recently.")
})

$("#button2").on("click", function(event){
  event.preventDefault();
  $("#response").html("Well...I disagree with YOU.")
})

$("#button3").on("click", function(event){
  event.preventDefault();
  $("#response").html("C'mon...you have to at least think SOMETHING about me, right?")
})

$("#button4").on("click", function(event){
  event.preventDefault();
  $("#response").html("Yay!")
})

$("#button5").on("click", function(event){
  event.preventDefault();
  $("#response").html("You are now my best friend.")
})