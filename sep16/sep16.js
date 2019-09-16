console.log("SECRET! If you highlight the page text after you pick one of the images, a secret message will appear...")

$("img").on("click", function (e){
  e.preventDefault();
  let candyChoice = $(this).attr("data-attribute")
  $("#personality").html(`<h2>${candyChoice}</h2>`)

  if($(this).attr("alt") === "...a basketball?"){
    $("#basketball").html("I kid you not, when I went to look up candy clipart for this app, an image of a basketball came up. The fact that this happened was too funny to pass up on.")
  }
  else{
    $("#basketball").html(" ")
  }
}
)