// Défilement doux pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Défilement doux pour le bouton "Explorer"
document.querySelector('.scroll-btn').addEventListener('click', () => {
    document.querySelector('#intro').scrollIntoView({
        behavior: 'smooth'
    });
});

// Animation des cartes au défilement
const cards = document.querySelectorAll('.card');

const revealCards = () => {
    const windowHeight = window.innerHeight;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - 100) {
            card.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);
