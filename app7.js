let box = document.querySelector('.box')
let amount = 725
let button = document.querySelector('.button')
let btn =  document.querySelector('.btn')
let code = document.querySelector('.code')
for (let i = 0; i < amount; i++) {
    let item = document.createElement('div')
    item.classList.add('item')
    box.append(item)
    item.addEventListener('mouseleave', () => removeColor(item))
}



function removeColor(el) {
    el.style.background = 'none'

}
btn.addEventListener('click', () => {
    if (code.value == 'qwerty') {
        lock.style.display = 'none'
    }else {

    }
})



let secretLock = document.querySelector('.secret__lock');
let secretDoor = document.querySelector('.door');
let secretBtn = document.querySelector('.btn')
let secretInp = document.querySelector('.code')
let link9 = document.querySelector('.door__link')
let locked = document.querySelector('.locked__text')

secretLock.addEventListener('click', () => {
  locked.style.opacity = '1'
  setTimeout(() => {
  locked.style.opacity = '0'
  }, 5000);
})

secretBtn.addEventListener('click', () => {
  if (secretInp.value == 'qwerty') {
    secretLock.style.display = 'none'
    link9.href = 'page8.html'
    link9.style.cursor = 'pointer'
  }else {
    locked.innerHTML = 'Неверно. Найди пароль на последней странице'
      locked.style.opacity = '1'
      setTimeout(() => {
      locked.style.opacity = '0'
      }, 2000);
  }
})