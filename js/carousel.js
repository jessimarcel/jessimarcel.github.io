const slider = document.getElementById('slider');
const imagesContainer = slider.children[0];
const buttonRight = document.getElementById('slide-right');
const buttonLeft = document.getElementById('slide-left');

const MIN_IDX = -1;
const MAX_IDX = imagesContainer.children.length - 2;
const IMAGE_WIDTH = 250;
let activeIdx = 0;

function updateSlider (newIdx){
  imagesContainer.children[activeIdx + 1].classList.remove('is-active');

  activeIdx = newIdx;

  imagesContainer.style.left = `calc(${-activeIdx} * 100% / 3)`;

  console.log(`${-activeIdx} * 100% / 6`);
  imagesContainer.children[activeIdx + 1].classList.add('is-active');
}

buttonLeft.addEventListener('click', () => {
  let newIdx = activeIdx - 1;
  if (newIdx < MIN_IDX) return;

  updateSlider(newIdx);
});

buttonRight.addEventListener('click', () => {
  let newIdx = activeIdx + 1;
  if (newIdx > MAX_IDX) return;

  updateSlider(newIdx);
});

updateSlider(activeIdx);
