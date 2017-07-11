$(document).ready(function() {
  $("#formOne").submit(function(event) {
  var countToInput = parseInt($("input#countTo").val());
  var countByInput = parseInt($("input#countBy").val());

    for (var index = 0; index <= countToInput; index += countByInput) {
    $("ul.results").append("<li>" + index + "</li>");
    }

  event.preventDefault();
  });
});





// var inputNumbers = ["countTo", "countBy"];
//
// inputNumbers.forEach(function(inputNumber) {
//   var newNumbers = $("input#" + inputNumbers).val();
