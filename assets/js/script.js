document.addEventListener('DOMContentLoaded', () => {
  const navbar1 = document.getElementById('navbar');
  console.log(navbar1)
  window.addEventListener('scroll', () => {
    if (window.scrollY > 15) {
      navbar1.classList.add('scrolled');
    } else {
      navbar1.classList.remove('scrolled');
    }
  });

});
