// Creation of lightbox effect - following the tutorial on Treehouse in JQuery Basics
//Problem: user when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id = "overlay"></div>');
var $image = $("<img>");

// Add an image to the overlay
// $overlay.append($image);

// Add overlay - add overlay div into body html
$("body").append($overlay);



//capture the click event on a link to an image
$("#gallery a").click(function(event){
  event.preventDefault();
  // var imageLocation = $(this).attr("href");

    //Show the overlay
     $overlay.show();

});