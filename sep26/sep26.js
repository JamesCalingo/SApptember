$(".btn").on("click", function (e) {
  e.preventDefault();
  Swal.fire({
    title: 'WAIT!',
    text: `I think I forgot something...go back and check my work again to see if you can help me figure it out.`,
    type: 'error',
    confirmButtonText: 'Absolutely Bro or Coolio Dude!'
  });
})