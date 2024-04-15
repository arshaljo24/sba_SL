const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const galleryItems = document.querySelectorAll('.gallery-item');

let current = 0;

prevBtn.addEventListener('click', () => {
  current--;
  if (current < 0) {
    current = galleryItems.length - 1;
  }
  smoothTransition(current);
});

nextBtn.addEventListener('click', () => {
  current++;
  if (current >= galleryItems.length) {
    current = 0;
  }
  smoothTransition(current);
});

function smoothTransition(index) {
  galleryItems.forEach((item, i) => {
    item.style.opacity = (i === index) ? 1 : 0;
  });
}
