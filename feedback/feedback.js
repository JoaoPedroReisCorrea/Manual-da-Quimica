const abrirBtn = document.getElementById('abrirFeedback');
const abrirNav = document.getElementById('abrirFeedbackNav');
const popupFeedback = document.getElementById('popupFeedback');
const fecharFeedback = document.getElementById('fecharFeedback');
const enviarFeedback = document.getElementById('enviarFeedback');

const popupObrigado = document.getElementById('popupObrigado');
const fecharObrigado = document.getElementById('fecharObrigado');
const fecharObrigadoBtn = document.getElementById('fecharObrigadoBtn');

abrirBtn.addEventListener('click', () => popupFeedback.style.display='flex');
abrirNav.addEventListener('click', () => popupFeedback.style.display='flex');
fecharFeedback.addEventListener('click', () => popupFeedback.style.display='none');
enviarFeedback.addEventListener('click', () => {
  popupFeedback.style.display='none';
  popupObrigado.style.display='flex';
  document.getElementById('mensagem').value = '';
});
fecharObrigado.addEventListener('click', () => popupObrigado.style.display='none');
fecharObrigadoBtn.addEventListener('click', () => popupObrigado.style.display='none');
window.addEventListener('click', e => {
  if(e.target===popupFeedback) popupFeedback.style.display='none';
  if(e.target===popupObrigado) popupObrigado.style.display='none';
});

// Accordion FAQ
const faqs = document.querySelectorAll('.faq-item');
faqs.forEach(item => {
  const pergunta = item.querySelector('.faq-pergunta');
  const resposta = item.querySelector('.faq-resposta');
  const seta = item.querySelector('.seta');

  pergunta.addEventListener('click', () => {
    resposta.style.display = resposta.style.display === 'block' ? 'none' : 'block';
    seta.style.transform = resposta.style.display === 'block' ? 'rotate(180deg)' : 'rotate(0deg)';
  });
});
