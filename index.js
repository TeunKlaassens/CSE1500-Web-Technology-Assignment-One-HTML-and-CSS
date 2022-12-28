const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');
const nav = document.querySelector('nav');

dropdown.addEventListener('click', function() {
  dropdownContent.classList.toggle('show');
});

window.addEventListener('scroll', function() {
    if (window.scrollY > 10) {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
    }
  });




