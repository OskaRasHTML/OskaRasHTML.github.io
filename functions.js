document.getElementById('theme-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
});
const scrollToTopBtn = document.getElementById('scroll-to-top');
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollToTopBtn.style.display = "block";
  } else {
      scrollToTopBtn.style.display = "none";
  }
};
scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
