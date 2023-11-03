# F28WP-lab3

Part 1 Gallery:

in the javascript section of the gallery Page I created a Pointer called Index That points to the images that should be shown to the user.

Whenever the NextorPrevious function is called by the two buttons below the image, the Index increases OR decreases depending on the users input And based on that value Index will point to the corresponding image.
On top of that it calls the third function showSlides whose function is explained shortly

So if the User calls NextorPrevious(1) Then the index INCREASES by 1 and thus moves to the next image of the page. 
Obviously if the user calls NextorPrevious(-1) then the index DECREASES by 1 and moves to the previous image of the page.

The third function showSlides actually uses a loop to convert all the images present in mySlides class to be hidden with a little help from CSS(style.display:nothing)
However we exclude the one we choose with an if statement stating if the i is equal to the Value of Index-1 (Because the starting point of slides is 0) then we should set it to the Block Display.

And thus we create our slideshow that can move to and fro between images
