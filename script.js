// Sample movie data
const movies = [
    { id: 1, title: "Inception", description: "A mind-bending thriller.", image: "poster1.jpg" },
    { id: 2, title: "Interstellar", description: "A journey beyond the stars.", image: "poster2.jpg" },
    { id: 3, title: "The Dark Knight", description: "A heroic tale of Gotham's finest.", image: "poster3.jpg" },
    { id: 4, title: "Evil Dead Rise", description: "Evil Dead Rise (2023) is a horror film that follows two sisters, Beth and Ellie, who find themselves battling demonic forces after discovering a cursed book in their apartment building. As terrifying supernatural events unfold, they must fight to survive against relentless, violent evil in a claustrophobic high-rise setting. This entry brings a fresh, chilling twist to the Evil Dead franchise.", image: "poster4.jpg" },
    { id: 1, title: "The Nun", description: "The Nun (2018) is a supernatural horror film set in 1952 Romania, where a priest and a novice nun are sent by the Vatican to investigate the mysterious death of a nun at a secluded abbey. As they uncover dark secrets, they confront a powerful demonic entity known as Valak, the sinister nun, leading to terrifying encounters. This film expands on The Conjuring universe, exploring the origins of one of its most haunting villains..", image: "poster1.jpg" },
    { id: 1, title: "The Exorcist", description: "The Exorcist (1973) is a classic horror film that follows the harrowing story of a young girl, Regan, who becomes possessed by a demonic entity. Her desperate mother seeks the help of two priests, who perform a dangerous exorcism to free her from the spirit. Known for its intense and groundbreaking horror, the film explores themes of faith, good vs. evil, and has become one of the most iconic horror movies of all time..", image: "poster1.jpg" },
];

const movieListContainer = document.querySelector('.carousel-container');
const movieDetails = document.getElementById('movie-details');
const videoPlayer = document.getElementById('video-player');
const movieTitle = document.getElementById('movie-title');
const movieDescription = document.getElementById('movie-description');

// Function to display movies in carousel
function displayMovies() {
    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        movieItem.innerHTML = `<img src="${movie.image}" alt="${movie.title}"> <p>${movie.title}</p>`;
        movieItem.addEventListener('click', () => showDetails(movie));
        movieListContainer.appendChild(movieItem);
    });
}

// Function to show movie details in modal
function showDetails(movie) {
    movieTitle.textContent = movie.title;
    movieDescription.textContent = movie.description;
    movieDetails.classList.remove('hidden');
}

// Close movie details modal
document.getElementById('close-details').addEventListener('click', () => {
    movieDetails.classList.add('hidden');
});

// Play movie and show video player overlay
document.getElementById('play-movie').addEventListener('click', () => {
    movieDetails.classList.add('hidden');
    videoPlayer.classList.remove('hidden');
});

// Close video player
document.getElementById('close-player').addEventListener('click', () => {
    videoPlayer.classList.add('hidden');
});

// Carousel sliding function
let scrollAmount = 0;
function slideCarousel(direction) {
    const scrollWidth = 220; // Width of each item + gap
    scrollAmount += direction * scrollWidth;
    movieListContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Initialize movie display
displayMovies();

