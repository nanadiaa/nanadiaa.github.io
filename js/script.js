const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
if (menuToggle) menuToggle.addEventListener('click', () => navMenu.classList.toggle('open'));

document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());

const projectData = {
  merdeka: {
    title: "Merdeka Inventory",
    images: [
      "assets/img/details/merdeka-1.png",
      "assets/img/details/merdeka-2.png",
      "assets/img/details/merdeka-3.png",
      "assets/img/details/merdeka-4.png",
      "assets/img/details/merdeka-5.png",
      "assets/img/details/merdeka-6.png",
    ]
  },
  sihadir: {
    title: "Si Hadir",
    images: [
      "assets/img/details/sihadir-1.png",

    ]
  },
  padasuka: {
    title: "PADASUKA",
    images: [
      "assets/img/details/padasuka-1.png",
    ]
  },
  dolcebite: {
    title: "Dolce Bite",
    images: [
      "assets/img/details/dolcebite-1.png",
    ]
  },
  quickmart: {
    title: "QuickMart",
    images: [
      "assets/img/details/quickmart-1.png",
    ]
  },
};

function openProjectModal(id) {
  const data = projectData[id];
  if (!data) return;

  document.getElementById('modalTitle').textContent = data.title;

  const imgContainer = document.getElementById('modalImages');
  imgContainer.innerHTML = '';
  data.images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = data.title;
    imgContainer.appendChild(img);
  });

  document.getElementById('projectModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  document.getElementById('projectModal').classList.remove('open');
  document.body.style.overflow = '';
}