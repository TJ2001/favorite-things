$(document).ready(function() {
  $("#favthings").submit(function(event) {
  // event.preventDefault();
    // var blanks = ["formI", "formI2", "formI3", "formI4"]

    var x = new Array();
    x[0] = document.getElementById("color").value;
    x[1] = document.getElementById("food").value;
    x[2] = document.getElementById("clothing").value;
    x[3] = document.getElementById("drink").value;

    alert(x[0]);
  });
});
