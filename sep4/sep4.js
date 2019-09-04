let countdownToPika = setTimeout(boom, 1000 * 240);

$(".btn").on("click", function(event){
  event.preventDefault();
clearTimeout(countdownToPika);
$(".countdown").html(`<h2>You tried to sneak a peek at the thing? Well TOO BAD! Good things come to those who wait...but for you, have this:</h2>`);
$(".gifdiv").html(`<iframe src="https://giphy.com/embed/LXONhtCmN32YU" width="480" height="350" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/LXONhtCmN32YU">via GIPHY</a></p>`)
})

function boom(){
  $(".countdown").html(`<h1>Here it is!`)
  $(".gifdiv").html(`<iframe src="https://giphy.com/embed/Q5QxLTQBstigp6YmH1" width="480" height="286" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/Q5QxLTQBstigp6YmH1">via GIPHY</a></p>`)
}