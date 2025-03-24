const hamBurger = document.querySelector('.hamburger');
hamBurger.addEventListener('click', headerMenuShowHide);

function headerMenuShowHide() {
  const headerLinks = document.querySelector('.header-links');
  headerLinks.classList.toggle('active');
}
