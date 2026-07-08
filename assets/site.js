// Menú móvil
document.querySelector('.burger')?.addEventListener('click', function () {
  document.querySelector('nav ul').classList.toggle('open');
});

// Tooltip del botón de WhatsApp: aparece a los 3 s y se oculta a los 9 s
window.addEventListener('load', function () {
  var wa = document.querySelector('.wa-btn');
  if (!wa) return;
  setTimeout(function () { wa.classList.add('show-tip'); }, 3000);
  setTimeout(function () { wa.classList.remove('show-tip'); }, 9000);
});
