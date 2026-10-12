
/* Quiet Confidence direction: interactions are calm, obvious, accessible, and limited to useful motion. */
document.documentElement.classList.add('js-ready');
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  }));
}
const enquiry = document.querySelector('[data-enquiry-form]');
if (enquiry && new URLSearchParams(window.location.search).get('success') === '1') {
  const notice = document.createElement('p');
  notice.className = 'form-success';
  notice.setAttribute('role', 'status');
  notice.textContent = 'Thanks — your enquiry has been sent. Greg will respond as soon as possible.';
  enquiry.prepend(notice);
}
