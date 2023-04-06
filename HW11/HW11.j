const images = [
	"image1.jpg",
	"image2.jpg",
	"image3.jpg",
	"image4.jpg",
	"image5.jpg",
	"image6.jpg",
	"image7.jpg",
	"image8.jpg",
	"image9.jpg",
	"image10.jpg"
];

// Shuffle the images randomly
shuffleArray(images);

// Create the puzzle pieces
for (let i = 0; i < images.length; i++) {
	let puzzlePiece = document.createElement("div");
	puzzlePiece.classList.add("puzzle-piece");
	puzzlePiece.style.backgroundImage = `url(${images[i]})`;
	puzzlePiece.draggable = true;
	puzzlePiece.addEventListener("dragstart", dragStart);
	puzzlePiece.addEventListener("dragover", dragOver);
	puzzlePiece.addEventListener("drop", drop);
	document.getElementById("puzzle-container").appendChild(puzzlePiece);
}

let draggedPiece = null;

// Function to shuffle an array randomly
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

// Function to handle drag start event
function dragStart(e) {
	draggedPiece = e.target;
	e.dataTransfer.setData("text/plain", "");
	e.target.style.opacity = "1";
}

// Function to handle drag over event
function dragOver(e) {
	e.preventDefault();
}

// Function to handle drop event
function drop(e) {
	e.preventDefault();
	if (e.target.classList.contains("puzzle-piece")) {
		let temp = e.target.style.backgroundImage;
		e.target.style.backgroundImage = draggedPiece.style.backgroundImage;
		draggedPiece.style.backgroundImage = temp;
	}
	draggedPiece.style.opacity = "0.7";
	draggedPiece = null;
}