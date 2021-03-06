// Creation of lightbox effect - following the tutorial on Treehouse in JQuery Basics
//Problem: user when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

// TODO:
// change to using vanilla JS
// change to being able to click through the photos when they pop up in lightbox type way

var $overlay = $('<div id = "overlay"></div>');
// var overlay = document.getElementById('overlay');

var $image = $('<img>');
// var image = document.querySelectorAll('img');
// document.querySelectorAll('img');

var $caption = $('<p></p>');

// Add an image to the overlay - image code
$overlay.append($image);

// $(parent).append(el);
// parent.appendChild(el);
// overlay.appendChild(image);

// Add overlay - add overlay div into body html
$('body').append($overlay);

// Add a caption to overlay
$overlay.append($caption);

//capture the click event on a link to an image
$('#gallery a').click(function(event) {
  event.preventDefault();
  //get the image location - reference
  var imageLocation = $(this).attr('href');

  //update overlay with the image from the link
  $image.attr('src', imageLocation);

  //Show the overlay
  $overlay.show();

  //Get child's alt atrribute and set caption
  var captionText = $(this)
    .children('img')
    .attr('alt');
  //update overlay with the caption from link - alt tag
  $caption.text(captionText);
});

// When overlay is clicked
$overlay.click(function() {
  //Hide the overlay (which will show whole page again)
  $overlay.hide();
});
