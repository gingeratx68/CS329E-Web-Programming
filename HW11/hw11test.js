// all puzzle images 
const puzzlesets = [
[
  "img1-1.jpg",
  "img1-2.jpg",
  "img1-3.jpg",
  "img1-4.jpg",
  "img1-5.jpg",
  "img1-6.jpg",
  "img1-7.jpg",
  "img1-8.jpg",
  "img1-9.jpg",
  "img1-10.jpg",
  "img1-11.jpg",
  "img1-12.jpg",
  "img1-1.jpg",
  "img1-1.jpg",
],
[
  "img2-1.jpg",
  "img2-2.jpg",
  "img2-3.jpg",
  "img2-4.jpg",
  "img2-5.jpg",
  "img2-6.jpg",
  "img2-7.jpg",
  "img2-8.jpg",
  "img2-9.jpg",
  "img2-10.jpg",
  "img2-11.jpg",
  "img2-12.jpg",
  "img2-1.jpg",
  "img2-1.jpg",
],
[
  "img3-1.jpg",
  "img3-2.jpg",
  "img3-3.jpg",
  "img3-4.jpg",
  "img3-5.jpg",
  "img3-6.jpg",
  "img3-7.jpg",
  "img3-8.jpg",
  "img3-9.jpg",
  "img3-10.jpg",
  "img3-11.jpg",
  "img3-12.jpg",
  "img3-1.jpg",
  "img3-1.jpg",
],
]

// select random puzzle set
const randomSet = puzzlesets[Math.floor(Math.random() * puzzlesets.length)];

// shuffle puzzle set the images randomly
const shuffledImages = randomSet.sort(() => Math.random() - 0.5);

// add each image to the puzzle div with a unique id and set it to the new id
for (let i = 1; i <= 12; i++) {
  const imgElement = document.getElementById(`piece-${i}`);
  imgElement.src = shuffledImages[i-1];
}

function grabber(event) {
   // Set the global variable for the element to be moved
   theElement = event.target;

   // Determine the position of the image to be grabbed
   posX = theElement.offsetLeft;
   posY = theElement.offsetTop;

   // Compute the difference between where it is and where the mouse click occurred
   diffX = event.clientX - posX;
   diffY = event.clientY - posY;

   // Now register the event handlers for moving and dropping the image
   document.addEventListener("mousemove", mover, true);
   document.addEventListener("mouseup", dropper, true);
}

// The event handler function for moving the image
function mover(event) {
   // Compute the new position and move the image
   theElement.style.left = (event.clientX - diffX) + "px";
   theElement.style.top = (event.clientY - diffY) + "px";
}

// The event handler function for dropping the image
function dropper(event) {
   // Unregister the event handlers for mouseup and mousemove
   document.removeEventListener("mouseup", dropper, true);
   document.removeEventListener("mousemove", mover, true);
}
var images = document.querySelectorAll("img:not(#exclude-me)");

for (var i = 0; i < images.length; i++) {
   images[i].addEventListener("mousedown", grabber, false);
}

 

counter=0;
var time = setInterval(timer,1000);
function timer() {
  ++ counter;
  var hour = Math.floor(counter/3600);
  var minute = Math.floor((counter - hour*3600)/60);
  var seconds = counter - ((hour*3600)+(minute*60));
  document.getElementById("txt").innerHTML = hour + ":" + minute +":"+seconds;
}