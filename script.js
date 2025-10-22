let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const heartContainer = document.querySelector('.heart-container');
const backgroundMusic = document.getElementById('backgroundMusic');

// Function to play music automatically (with a user interaction fallback)
function playMusic() {
    backgroundMusic.volume = 0.6; // Adjust volume as needed (0.0 to 1.0)
    backgroundMusic.play().catch(e => {
        console.log("Autoplay prevented, user interaction needed.", e);
        // Optional: Show a subtle "Tap to play music" button if autoplay fails
    });
}

// Initial music play attempt
playMusic();

function openHeart() {
    heartContainer.classList.add('open');
    // After heart animation, move to the next slide
    setTimeout(() => {
        nextSlide();
    }, 1200); // Matches the heart animation duration
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        slides[currentSlide].classList.remove('active');
        currentSlide++;
        slides[currentSlide].classList.add('active');
    } else if (currentSlide === slides.length - 1) {
        // This is the last slide, maybe a final animation or message
        console.log("Reached the end of the presentation!");
    }
    // Ensure music is playing if it was paused or failed autoplay
    playMusic();
}

// Optional: For handling manual music play if autoplay is blocked
document.addEventListener('click', () => {
    playMusic();
}, { once: true }); // Only try to play on the first click