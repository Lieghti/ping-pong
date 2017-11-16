var pingPong = function(number) {
  var numberList =[];

  for (var i = 1; i <= number; i++ ) {
    if (i % 15 === 0) {
      numberList.push("Ping Pong");
    } else if (i % 5 === 0){
      numberList.push("pong");
    } else if (i % 3 === 0) {
      numberList.push("Ping");
    } else {
      numberList.push("" + i);
    }
    {

    return (numberList);
    }



  // user  logic
  $(document).ready(function() {

    $("form#ping-pong").submit(function(event) {
      event.preventDefault();
      $(".list").empty();

      var number = parseInt($("input#number").val());

      var result = pingPong(number);

    result.forEach(function(PingPongInput){
        $("ul.list").append("<li>" + pingPongInput + "</li>");
      })
      $("#result").show();
    });

  });
} // These shouldn't be here, but the console keeps prompting me to add these two brackets. I don't know why.
}
