const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

navToggle?.addEventListener('click', () => {
  mainNav?.classList.toggle('open');
  const expanded = mainNav?.classList.contains('open');
  navToggle.setAttribute('aria-label', expanded ? 'Close navigation' : 'Open navigation');
});

const contactForm = document.querySelector('.contact-form');

contactForm?.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.querySelector('.contact-form input[type="text"]').value.trim();
  const email = document.querySelector('.contact-form input[type="email"]').value.trim();
  const message = document.querySelector('.contact-form textarea').value.trim();
  const phone = '256767548898';
  const text = encodeURIComponent(`Hello Taidor, my name is ${name}. I am contacting you from the website. Email: ${email}. Message: ${message}`);
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  contactForm.reset();
});
