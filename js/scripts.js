// business logic
var PingPong = function(number) {

 //if ((number % 3 === 0)) { - this one works

if (number % 5 === 0) { -- this one works too

// if ((number % 3 === 0) && (number % 5 === 0)) {
  //   return true;
  // } else {
    return true;
 } else {
    return false;
  }
};

// user interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = PingPong(number);
    $("#result").text(result);

  //   $(".number").text(number);
  //
  //   if (!result) {                 // same as writing if (result === false)
  //     $(".ping").text("not");
  //   } else {
  //     $(".pong").text("");
  //   }
  //
  //   $("#result").show();
   });
});
