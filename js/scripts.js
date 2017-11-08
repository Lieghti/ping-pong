// business logic

var PingPong = function(number) {
<<<<<<< HEAD
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

=======
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
>>>>>>> 06780a8cca6083b1b55e2dcb642a242dfc51a48d

};

// user interface logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
<<<<<<< HEAD
    var result = PingPong(number);
=======
    //var result = PingPong(number);
    $("#result").text(result);

   $(".number").text(number);

   if (result) {                 // same as writing if (result === false)
     $(".ping").text("ping");
    } else {
      $(".pong").text("pong");
    }

>>>>>>> 06780a8cca6083b1b55e2dcb642a242dfc51a48d
    $("#result").show();
  });

});
