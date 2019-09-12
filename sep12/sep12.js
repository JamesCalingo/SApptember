let mean = 0;
let median = 0;
let numberArray = []
let total = 0

$("#numbers").html(numberArray.join(", "))
$("#mean").html(mean);
$("#median").html(median);

$("#addNumber").on("click", function (event) {
  event.preventDefault();
  let newNumber = parseInt($("#numberInput").val().trim());
  numberArray.push(newNumber);
  $("numberInput").empty();
  $("#numbers").html(numberArray.join(", "))

  console.log(numberArray);
  let arrLength = numberArray.length;
  console.log(arrLength);

  let sum = numberArray.reduce((previous, current) => current += previous);
  mean = sum / arrLength;
  $("#mean").html(mean)

  numberArray.sort((a, b) => a - b);
  let lowMiddle = Math.floor((numberArray.length - 1) / 2);
  let highMiddle = Math.ceil((numberArray.length - 1) / 2);
  median = (numberArray[lowMiddle] + numberArray[highMiddle]) / 2;
  $("#median").html(median);
  console.log(median);
})

$("#reset").on("click", function (event) {
  event.preventDefault();
  numberArray = [];
  mean = 0;
  median = 0;

  $("#numbers").html(numberArray.join(", "))
  $("#mean").html(mean);
  $("#median").html(median);
})