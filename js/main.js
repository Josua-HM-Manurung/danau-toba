// ============================================
// Navbar: berubah gaya saat discroll
// ============================================
const navbar = document.querySelector('.navbar');
const handleScroll = () => {
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};
window.addEventListener('scroll', handleScroll);
handleScroll();

// ============================================
// Menu mobile toggle
// ============================================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// ============================================
// Tandai link nav yang aktif sesuai halaman
// ============================================
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach((link) => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.classList.add('active');
  }
});

// ============================================
// Scroll reveal animation (IntersectionObserver)
// Ringan, tanpa dependency library luar
// ============================================
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealElements.forEach((el) => observer.observe(el));

// ============================================
// Hitung mundur angka statistik hero (efek count-up)
// ============================================
const counters = document.querySelectorAll('[data-count]');
const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const duration = 1400;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = (target * eased).toFixed(target % 1 !== 0 ? 1 : 0);
        el.textContent = current + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countObserver.unobserve(el);
    });
  },
  { threshold: 0.5 }
);
counters.forEach((el) => countObserver.observe(el));

// ============================================
// Form kontak - simulasi kirim (tidak ada backend)
// ============================================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button');
    const original = btn.textContent;
    btn.textContent = 'Terkirim ✓';
    btn.style.background = '#2f4f3e';
    contactForm.reset();
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
    }, 2500);
  });
}
