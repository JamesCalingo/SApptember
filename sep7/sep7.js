$(".btn").on("click", function(event){
  event.preventDefault();
  $(".message").html(`<h1>Well, no matter how you're feeling...<br>I hope you have a good day!</h1>`)
})