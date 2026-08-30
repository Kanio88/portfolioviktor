
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
if (enquiry) {
  enquiry.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(enquiry);
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name') || 'website visitor'}`);
    const body = encodeURIComponent(`Name: ${data.get('name') || ''}
Email: ${data.get('email') || ''}

${data.get('message') || ''}`);
    window.location.href = `mailto:greg@every-day-care.com?subject=${subject}&body=${body}`;
  });
}
