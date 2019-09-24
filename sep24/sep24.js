// Current Time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
$("#currentTime").html(moment(currentTime).format("hh:mm:ss"));

function update() {
  $('#currentTime').html(moment().format("hh:mm:ss"));
}

setInterval(update, 1000);

var midnight = moment().endOf('day').fromNow();
console.log(midnight)
$("#timeToMidnight").html(midnight)
