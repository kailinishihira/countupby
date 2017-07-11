$(document).ready(function() {
  $("#formOne").submit(function(event) {
  var countToInput = parseInt($("input#countTo").val());
  var countByInput = parseInt($("input#countBy").val());

    for (var index = 0; index <= countToInput; index += countByInput) {
    $("ul.results").append("<li>" + index + "</li>");
    }
    console.log(countToInput);
    // debugger;
    if (isNaN(countToInput) || isNaN(countByInput)) {
      alert("Please enter a number");
    } else if (countToInput < 0 || countByInput < 0) {
      alert("Please enter a positive number");
    } else if (countByInput > countToInput) {
      alert("Please enter a smaller 'Count by' number than your 'Count to' number");
    }
    // debugger;
  event.preventDefault();
  });
});





// var inputNumbers = ["countTo", "countBy"];
//
// inputNumbers.forEach(function(inputNumber) {
//   var newNumbers = $("input#" + inputNumbers).val();
