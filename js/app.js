// Creation of lightbox effect - following the tutorial on Treehouse in JQuery Basics
//Problem: user when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox







//capture the click event on a link to an image

$("#gallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");


});