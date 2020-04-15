const openBtn = document.getElementById('nav-open-btn');
const nav = document.getElementById('nav-open');
const wrapper = document.getElementById('wrapper');

function toggleNav (){
  if (nav.classList.contains('open')) {
    nav.classList.remove('open');
    wrapper.classList.remove('nav-is-open');
    openBtn.classList.remove('is-active');
  } else {
    nav.classList.add('open');
    wrapper.classList.add('nav-is-open');
    openBtn.classList.add('is-active');
  }
}

openBtn.addEventListener('click', toggleNav);

wrapper.addEventListener('click', function (){
  if (this.classList.contains('nav-is-open')) {
    toggleNav();
  }
});
