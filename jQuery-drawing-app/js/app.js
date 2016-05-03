var color = $(".selected").css("background-color");

// When clicking on control list items
$(".controls").on("click", "li", function(){
  // Deselect sibling elements
  $(this).siblings().removeClass("selected");
  // Select clicked element.
  $(this).addClass("selected");
  // Save current color
  color = $(this).css("background-color");
})


// When add color is pressed
$("#revealColorSelect").click(function(){
  // show color select or hide the color select
  changeColor();
  $("#colorSelect").toggle();
});

function changeColor(){
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb("+r+","+g+","+b+")");
}
// When color sliders change
$("input[type=range]").change(changeColor);
  // update new color span

// When add color is pressed
$("#addNewColor").click(function(){
  // append the color to the conrols ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor)
  // select the new color
  $newColor.click();
});


// On mouse events on the canvas
  // draw lines
