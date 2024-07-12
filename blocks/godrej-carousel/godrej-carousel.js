// script.js
const carousel = document.querySelector('.godrej-carousel');

// Create a new button element
const button = document.createElement('button');
button.id = 'nextBtn'; // Customize the button text
button.textContent = 'nextBtn';

// Append the button to the div
carousel.insertAdjacentElement('afterend', button);

const button2 = document.createElement('button');
button2.id = 'prevBtn';
button2.textContent = 'prevBtn';
carousel.insertAdjacentElement('afterend', button2);

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let cards = [];


// Replace with your actual JSON data URL
const jsonDataUrl = 'http://localhost:3000/godrej-data/articles-list.json';
// Carousel navigation
let currentIndex = 0;
const numCardsToShow = 4; // Number of cards to show at a time
// Fetch JSON data
fetch(jsonDataUrl)
    .then(response => response.json())
    .then(data => {

        // Create cards
        data.data.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.textContent = item.Title; // Customize this based on your data structure
            carousel.appendChild(card);
        });
        // Show the first 4 cards initially
        cards = document.querySelectorAll('.godrej-carousel-wrapper .card');
        showCards();
    })
    .catch(error => console.error('Error fetching JSON data:', error));




function showCards() {
    cards.forEach((card, index) => {
        const isVisible = index >= currentIndex && index < currentIndex + numCardsToShow;
        card.style.display = isVisible ? 'block' : 'none';
        card.style.transform = isVisible ? 'translateX(0)' : 'translateX(-100%)';
    });
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= numCardsToShow;
        showCards();
    }
});
nextBtn.addEventListener('click', () => {
    if (currentIndex + numCardsToShow < cards.length) {
        currentIndex += numCardsToShow;
        showCards();
    }
});

