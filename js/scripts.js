// business logic

var PingPong = function(number) {
  var newArray = [];
  for (i = 1; i >= number; i++) {
  } if (number % 3 === 0) {
    return newArray.push("ping");
    else if (number % 5 === 0) {
    return newArray.push("pong");
  } else if (number % 3 === 0) && (number % 5 === 0) {
   return newArray.push("PingPong");
    else {
      return number;
    }


};

// user interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = PingPong(number);
    $("#result").show();
  });

});
