var PingPong = function (number) {
  var numberList =[];
  for (var i = 1; i <= number; i++ ) {
    if (i % 15 === 0) {
      numberList.push("pingpong");
    } else if (i % 5 === 0){
      numberList.push ("pong");
    } else if (i % 3 === 0) {
      numberList.push ("Ping");
    } else {
      numberList.push ("" + i);
    }
    {
    console.log(numberList.join(" "));
    return (numberList);
    }



  // user  logic
  $(document).ready(function() {
    $("form#ping-pong").submit(function(event) {
      event.preventDefault();
      $("#result").empty();

      var number = parseInt($("#number").val());

      var result = PingPong(number);

    result.forEach(function(PingPongInput){
        $("ul#result").append("<li>" + pingPongInput + "</li>");
      })
      $("ul#result").show();
    });

  });
}
}
