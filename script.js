let images = [];
let currentIndex = 0;
const imgElement = document.getElementById('carousel');

// Fetch image list from server
async function fetchImages() {
    const response = await fetch('/api/images'); // works automatically on Vercel
    images = await response.json();
    if (images.length > 0) startCarousel();
  }
  

function showNextImage() {
  if (images.length === 0) return;

  imgElement.classList.remove('show');
  setTimeout(() => {
    imgElement.src = images[currentIndex];
    imgElement.onload = () => {
      imgElement.classList.add('show');
    };
    currentIndex = (currentIndex + 1) % images.length;
  }, 1000);
}

function startCarousel() {
  showNextImage();
  setInterval(showNextImage, 4000);
}

fetchImages();
