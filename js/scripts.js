
$("#favthings").submit(function(event) {
  // event.preventDefault();
    // var blanks = ["formI", "formI2", "formI3", "formI4"]

  var x = new Array();
  x[0] = document.getElementById("color").value;
  x[1] = document.getElementById("food").value;
  x[2] = document.getElementById("clothing").value;
  x[3] = document.getElementById("drink").value;



  // var cloneX = [x[1], x[0], x[2]]
  var cloneX = [];
  cloneX.push(x[1], x[0], x[2]);

  $("ul").append("<h2>My Favorite Things:</h2>");
  $("ul").append("<li>" + cloneX[0] + "</li>");
  $("ul").append("<li>" + cloneX[1] + "</li>");
  $("ul").append("<li>" + cloneX[2] + "</li>");
  // alert(x[0]);
    event.preventDefault();
});
