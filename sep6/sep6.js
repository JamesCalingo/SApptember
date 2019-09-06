var name;
var thing;
var device;
var time;

$("#submit").on("click", function (event){
  event.preventDefault();
  name = $("#name").val().trim();
  thing = $("#thing").val().trim();
  device = $("#device").val().trim();
  time = $("#time").val().trim();

  if(!name || !thing || !device || !time){
    alert("You forgot to fill in one of the fields. I won't do this unless you fill in ALL of them.")
  }
else{
$("#newstory").html(`<h2 class="text-center">Breaking News!</h2> ${name} was recently spotted looking at ${thing}s on their ${device}. Why is this news? Well, it's because they are the first person ever to be able to access the internet on a ${device}. More at ${time}.`)
}
})