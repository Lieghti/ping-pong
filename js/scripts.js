// business logic

var PingPong = function(number) {
  var numberList =[];
  debugger;
  for (i = 1; i <= number; i++ ) {
    if (i % 3 === 0) {
      numberList.push("Ping");
    } else if (i % 5 === 0){
      numberList.push("pong");
    } else if (i % 15 === 0) {
      numberList.push("pingpong");
    } else {
      numberList.push(" " + i);
    }


  };

  // user interface logic
  $(document).ready(function() {
    $("form#ping-pong").submit(function(event) {
      event.preventDefault();
      var number = parseInt($("input#number").val());

      var result = PingPong(number);

      $("#result").text(result);
      $("#result").show();
    });

  });
