{
  const button = document.getElementById('open-flash-sale');
  const flashSale = document.getElementById('flash-sale');

  button.addEventListener('click', () => {
    flashSale.classList.toggle('is-open');
  });
}
