let item = document.querySelectorAll('.item'),
    lose = document.querySelector('.over'),
    time = document.querySelector('.timeout'),
    start = document.querySelector('.start'),
    dangerLine = document.querySelector('.danger__line'),
    dangerLineTwo = document.querySelector('.danger__line-two'),
    dangerThrougt = document.querySelector('.danger__line-througt'),
    colors = document.querySelectorAll('.colors'),
    codeContainers = document.querySelectorAll('.color__container'),
    end = document.querySelector('.end'),
    itsAll = document.querySelector('.it__is-all'),
    page4 = document.querySelector('.page4'),
    dangerRayOne = document.querySelector('.ray__one'),
    dangerRayTwo = document.querySelector('.ray__two'),
    dangerRayThree = document.querySelector('.ray__three'),
    rayThrougtOne = document.querySelector('.ray__througt-one'),
    rayThrougtTwo = document.querySelector('.ray__througt-two'),
    rayThrougtThree = document.querySelector('.ray__througt-three')


    
    
// function over() {
  //     console.log(123);
  
  //     if (item.style.background == 'white') {
    //         console.log(123);
    //     }
//     setTimeout(over, 2000); 
//   } 

function over() {
  
  item.forEach((info) => {
    
    info.addEventListener('mouseenter', () =>  {
      // document.location.reload();

      lose.style = "display: flex"
      
      setTimeout(over, 50); 
      
    })
  })
}
setTimeout(over, 500); 



start.addEventListener('click', () => {
    time.style = 'display: none';
    start.style = 'display: none';
})


  function danger() {
    
    if (dangerLine.style.display == 'flex') {
      dangerLine.style.display = 'none';
      function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }
      let a = getRandom(140, 220)
      
      dangerLine.style = `transform: rotate(${a}deg);`
      dangerThrougt.style = `transform: rotate(${a}deg);`
    }else {
      dangerLine.style.display = 'flex';
    }

    setTimeout(danger, 700); 
  }
  setTimeout(danger, 700); 
  

  function circle() {
    if (dangerLineTwo.style.visibility == 'visible') {
      dangerLineTwo.style.visibility  = 'hidden';
    }else {
      dangerLineTwo.style.visibility  = 'visible';
    }
    setTimeout(circle, 700); 
  }
  setTimeout(circle, 700); 


  let secretLock = document.querySelector('.secret__lock');
  let secretDoor = document.querySelector('.it__is-all-two');
  let secretBtn = document.querySelector('.secret__btn')
  let secretInp = document.querySelector('.secret__inp')
  let link7 = document.querySelector('.link__to-page7')
  let locked = document.querySelector('.Locked')

  secretLock.addEventListener('click', () => {
    locked.style.opacity = '1'
    setTimeout(() => {
    locked.style.opacity = '0'
    }, 2000);
  })

  secretBtn.addEventListener('click', () => {
    if (secretInp.value == '7564') {
      secretLock.style.display = 'none'
      link7.href = 'page7.html'
      link7.style.cursor = 'pointer'
    }else if (secretInp.value == 'qwerty') {
      locked.innerHTML = 'Это код не от этой двери, КОД НА ПЕРВОЙ СТРАНИЦЕ'
      locked.style.opacity = '1'
      setTimeout(() => {
      locked.style.opacity = '0'
      }, 2000);
    }else {
      locked.innerHTML = 'Неверно. Найди пароль на первой странице'
        locked.style.opacity = '1'
        setTimeout(() => {
        locked.style.opacity = '0'
        }, 2000);
    }
  })

