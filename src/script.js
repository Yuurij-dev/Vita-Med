function mobileUlFunction() {
    
    const buttonShowUl = document.getElementById('button-show-mobile-ul')
    const buttonRemoveUl = document.getElementById('button-remove-mobile-ul')

    const ulMobileHeader = document.getElementById('mobile-ul-header')

    buttonShowUl.addEventListener('click', (e) => {
        ulMobileHeader.style.right = '13px'
        buttonShowUl.style.display = 'none'
    })

    buttonRemoveUl.addEventListener('click', (e) => {
        ulMobileHeader.style.right = '-500px'
        buttonShowUl.style.display = 'block'
    })
}

mobileUlFunction()

const btn = document.getElementById('backToTop');

// Mostrar botão ao rolar para baixo
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});

// Voltar ao topo com scroll suave
btn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});