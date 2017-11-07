// business logic

var PingPong = function(number) {
  var emptyArray =[];
  for (i = 1; number < 15; i +=1 ) {
    if (number % 3 === 0) && (number % 5 === 0){
      return emptyArray.push("ping pong");
    } else if (number % 5 === 0) {
      return emptyArray.push("pong");
    } else if (number % 3 === 0) {
      return emptyArray.push ("ping")
    }
    var displayNumber = document.createElement("li").lastChild;



// https://jsfiddle.net/abdennour/b7Lwbrof/1/

//https://www.w3schools.com/jsref/met_node_appendchild.asp


  // if (number % 3 === 0) {
  //   return emptyArray.push("ping pong");
  // } else if ((number % 5 === 0)){
  //   return span.pong;
  // } else if ((number % 3 === 0) && (number % 5 === 0)){
  //   return span.both;
  // }

 //     if (number % 5 === 0) {
 //
 //  if ((number % 3 === 0) && (number % 5 === 0)) {
 //    return true;
 //  } else {
 //    return true;
 // } else {
 //    return false;
 //  }

};

// user interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    //var result = PingPong(number);
    $("#result").text(result);

   $(".number").text(number);

   if (result) {                 // same as writing if (result === false)
     $(".ping").text("ping");
    } else {
      $(".pong").text("pong");
    }

    $("#result").show();
  });

});
