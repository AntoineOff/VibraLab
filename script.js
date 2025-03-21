// Gestion des onglets
const tabs = document.querySelectorAll('.tab-trigger');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Désactiver l'onglet actif
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        // Activer l'onglet cliqué
        tab.classList.add('active');
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Apparition initiale
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.intro-overlay').style.display = 'none';
    }, 3000);
});
