import { places } from '../data/discover.mjs';

const container = document.getElementById('cards-container');
const visitMsg = document.getElementById('visit-message');

// 1. Build 8 cards from JSON
places.forEach((place, i) => {
    const card = document.createElement('section');
    card.classList.add('card', `card${i+1}`);

    card.innerHTML = `
    <h2>${place.name}</h2>
    <figure>
    <img src="${place.photo}" alt="${place.name}" loading="lazy" width="300" height="200">
    </figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>learn more</button>
    `;
    container.appendChild(card);
});

// 2. localStorage visit message
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();
const msPerDay = 1000 * 60 * 60 * 24;

if (!lastVisit) {
    visitMsg.textContent = "Welcome! Let us know if you have any questions.";
} else {
    const days = Math.floor((now - lastVisit) / msPerDay);

    if (days < 1) {
        visitMsg.textContent = "Back so soon! Awesome!";
    } else {
        const dayWord = days === 1 ? "day" : "days";
        visitMsg.textContent = `You last visited ${days} ${dayWord} ago.`;
    }
}

localStorage.setItem('lastVisit', now);