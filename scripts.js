var add = function (number1, number2) {
  return number1 + number2;
};

var subtact = function (number1, number2) {
  return number1 - number2;
};

var multiply = function (number1, number2) {
  return number1 * number2;
};

var divide = function (number1, number2) {
  return number1 / number2;
};

$(document).ready(function () {
  $("form#add").submit(function () {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    alert(add(number1, number2));
  });
});
