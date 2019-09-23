$(".btn").on("click", function (event) {
  event.preventDefault();
  $("#appZone").html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/0Pnl1ulaG5k?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
});