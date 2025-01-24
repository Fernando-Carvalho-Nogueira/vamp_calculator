function toggleMenu() {
    const menu = document.querySelector('.menu-hamburguer');
    const navMenu = document.querySelector('.nav-menu');
    const isOpen = menu.classList.contains('open');
    if (isOpen) {
        menu.classList.remove('open');
        navMenu.style.display = 'none';
    } else {
        menu.classList.add('open');
        navMenu.style.display = 'block';
    }
}


document.addEventListener('DOMContentLoaded', () => {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.menu-container').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o menu:', error));
});