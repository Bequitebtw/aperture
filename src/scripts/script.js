const burger = document.querySelector('.burger')
const menu = document.querySelector('.header-menu')
const btn = document.querySelector('.header-panel__button')
const item1 = document.querySelector('.item1')
const item2 = document.querySelector('.item2')
const item3 = document.querySelector('.item3')
const item4 = document.querySelector('.item4')
const arrow = document.querySelector('.back-to-top')
const mail_send = document.querySelector('.mail-send')
const mail_input = document.querySelector('.mail')
const icons = document.querySelector('.footer-icons')

burger.addEventListener('click', () => {
  menu.classList.toggle('display')
  btn.classList.toggle('display')
  mail_input.classList.toggle('index')
  icons.classList.toggle('index')
})
item1.addEventListener('click', () => {
  window.scrollTo({
    top: 700,
    behavior: 'smooth',
  })
})
item2.addEventListener('click', () => {
  window.scrollTo({
    top: 2191,
    behavior: 'smooth',
  })
})
item3.addEventListener('click', () => {
  window.scrollTo({
    top: 2785,
    behavior: 'smooth',
  })
})
item4.addEventListener('click', () => {
  window.scrollTo({
    top: 5200,
    behavior: 'smooth',
  })
})
arrow.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    arrow.classList.add('active')
  } else {
    arrow.classList.remove('active')
  }
})

function remove() {
  preloader.style.display = 'none'
}
let preloader = document.querySelector('.preloader')
window.onload = function () {
  setTimeout(remove, 1500)
}

function remove2() {
  successfully.style.top = '-40px'
  nothing.style.opacity = '0'
  nothing.style.top = '-40px'
}
const nothing = document.querySelector('.nothing')
const successfully = document.querySelector('.sent')
const input = document.querySelector('.input-mail')
const btn_clear = document.querySelector('.mail-send')
btn_clear.addEventListener('click', () => {
  if (input.value == '') {
    nothing.style.opacity = '1'
    nothing.style.top = '30px'
    setTimeout(remove2, 2000)
  } else {
    input.value = ' '
    successfully.style.top = '30px'
    setTimeout(remove2, 2000)
  }
})
