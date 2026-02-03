
import './style.css';
// Cargar datos al iniciar
document.addEventListener('DOMContentLoaded', () => {
    loadSavedData();
});

function toggleModal(show) {
    const modal = document.getElementById('editModal');
    modal.classList.toggle('active', show);
    if(show) fillInputs();
}

function fillInputs() {
    document.getElementById('inputLogo').value = document.getElementById('displayLogo').innerText;
    document.getElementById('inputTitle').value = document.getElementById('displayHeroTitle').innerText;
    document.getElementById('inputHighlight').value = document.getElementById('displayHeroHighlight').innerText;
    document.getElementById('inputDescription').value = document.getElementById('displayHeroDescription').innerText;
}

function savePortfolioData() {
    const data = {
        logo: document.getElementById('inputLogo').value,
        title: document.getElementById('inputTitle').value,
        highlight: document.getElementById('inputHighlight').value,
        description: document.getElementById('inputDescription').value
    };

    // 1. Guardar en LocalStorage
    localStorage.setItem('portfolio_settings', JSON.stringify(data));

    // 2. Actualizar el DOM
    updateDOM(data);

    // 3. Feedback visual
    toggleModal(false);
    showToast();
}

function updateDOM(data) {
    if(!data) return;
    document.getElementById('displayLogo').innerText = data.logo;
    document.getElementById('displayHeroTitle').innerText = data.title;
    document.getElementById('displayHeroHighlight').innerText = data.highlight;
    document.getElementById('displayHeroDescription').innerText = data.description;
}

function loadSavedData() {
    const saved = localStorage.getItem('portfolio_settings');
    if(saved) {
        updateDOM(JSON.parse(saved));
    }
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}
// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});