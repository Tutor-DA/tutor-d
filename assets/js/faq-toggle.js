document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
  });
});

<script>
  window.onscroll = function () {
    document.getElementById('backToTop').style.display = (window.scrollY > 200) ? 'block' : 'none';
  };
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>
