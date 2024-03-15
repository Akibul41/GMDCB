var images = ["image1.jpg", "image2.jpg", "image3.jpg"];
var currentImageIndex = 0;
var image = document.getElementById("image");

// Function to change the image
function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  image.style.opacity = 0; // Start fading out
  setTimeout(updateImage, 500); // Wait for the fade out animation to complete
}

// Function to update the image source and fade it in
function updateImage() {
  image.src = images[currentImageIndex];
  image.style.opacity = 1; // Start fading in
}

// Set interval to change images automatically every 3 seconds
setInterval(changeImage, 3000);
