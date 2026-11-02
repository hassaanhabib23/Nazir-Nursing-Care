// Mobile menu
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
if (burger && menu) {
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
}

// Inquiry form: opens WhatsApp with the details filled in (no backend needed)
const WHATSAPP_NUMBER = '923000000000'; // TODO: replace with the real number
const form = document.getElementById('inquiry-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const text = [
      'Assalam o Alaikum, I would like to arrange nursing care.',
      `Name: ${d.get('name')}`,
      `Phone: ${d.get('phone')}`,
      `Care needed: ${d.get('service')}`,
      `Area: ${d.get('area')}`,
      `Details: ${d.get('details') || '-'}`
    ].join('\n');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });
}
