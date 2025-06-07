document.addEventListener("DOMContentLoaded", function () {
  // 1. FAQ Toggle
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
  });

  // 2. Back to Top Button Logic
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', function () {
      backToTopBtn.style.display = (window.scrollY > 200) ? 'block' : 'none';
    });

    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 3. Mobile Menu Toggle (if button exists)
  const mobileMenuBtn = document.getElementById('mobileMenuToggle');
  const nav = document.querySelector('.main-nav');
  if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // 4. Reveal on Scroll Animation
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // 5. Load Header and Footer if containers exist
  const header = document.getElementById('header-container');
  const footer = document.getElementById('footer-container');

  if (header) {
    fetch('../components/header.html')
      .then(res => res.text())
      .then(html => header.innerHTML = html);
  }

  if (footer) {
    fetch('../components/footer.html')
      .then(res => res.text())
      .then(html => footer.innerHTML = html);
  }
});
