// business logic

var PingPong = function(number) {
  var numberList =[];
  for (i = 1; i <= number; i++ ) {
    if ((number % 3 === 0) && (number % 5 === 0)){
      return emptyArray.push("ping pong");
    } else if (number % 5 === 0) {
      return emptyArray.push("pong");
    } else if (number % 3 === 0) {
      return emptyArray.push ("ping")
    } else {
      return number;
    }
    var displayNumber = document.createElement("li").lastChild;


};

// user interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());

    var result = PingPong(number);

    //var result = PingPong(number);
    $("#result").text(result);
    $("#result").show();
  });

};
