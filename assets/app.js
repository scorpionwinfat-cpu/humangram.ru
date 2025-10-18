
// Minimal client-only waitlist; stores emails into localStorage for now.
// Replace handleSubmit with your backend or Formspree endpoint when ready.

const form = document.getElementById('waitlist');
const thanks = document.getElementById('thanks');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = (document.getElementById('email') || {}).value?.trim();
  if (!email) return;
  try {
    const key = 'humangram_waitlist';
    const list = JSON.parse(localStorage.getItem(key) || '[]');
    if (!list.includes(email)) list.push(email);
    localStorage.setItem(key, JSON.stringify(list));
    form.classList.add('hidden');
    thanks.classList.remove('hidden');
  } catch (err) {
    window.location.href = 'mailto:founders@humangram.ru?subject=Humangram%20Early%20Access&body=' + encodeURIComponent(email);
  }
});
