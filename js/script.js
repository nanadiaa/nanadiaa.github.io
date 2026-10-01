const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
if (menuToggle) menuToggle.addEventListener('click', () => navMenu.classList.toggle('open'));

document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());