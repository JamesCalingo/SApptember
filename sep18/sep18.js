let message = ""

$(".btn").on("click", function(event){
  event.preventDefault();
  message = $("#message").val().trim();
  $("#messageDisplay").html(message);
  localStorage.prompt = message;
})

// Store

// Retrieve
document.getElementById("messageDisplay").innerHTML = localStorage.prompt;