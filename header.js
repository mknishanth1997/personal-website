const hamBurger = document.querySelector('.hamburger');
hamBurger.addEventListener('click', headerMenuShowHide);

function headerMenuShowHide() {
  console.log('Hamburger function working: header.js');
  const headerLinks = document.querySelector('.header-links');
  headerLinks.classList.toggle('active');
}
console.log('HI');
