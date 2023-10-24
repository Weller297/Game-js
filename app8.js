let item = document.querySelectorAll('.item'),
    lose = document.querySelector('.over'),
    time = document.querySelector('.timeout'),
    start = document.querySelector('.start'),
    dangerLine = document.querySelector('.danger__line'),
    page8 = document.querySelector('.page8'),
    hpBar = document.querySelector('.health__bar'),
    dangerRayOne = document.querySelector('.ray__one'),
    dangerRayTwo = document.querySelector('.ray__two'),
    dangerRayThree = document.querySelector('.ray__three'),
    dangerRayFour = document.querySelector('.ray__four'),
    dangerRayFive = document.querySelector('.ray__five'),
    dangerRaySix = document.querySelector('.ray__six'),
    dangerRaySeven = document.querySelector('.ray__seven'),
    dangerRayEight = document.querySelector('.ray__eight'),
    dangerRayNine = document.querySelector('.ray__nine'),
    rayThrougtOne = document.querySelector('.ray__througt-one'),
    rayThrougtTwo = document.querySelector('.ray__througt-two'),
    rayThrougtThree = document.querySelector('.ray__througt-three'),
    rayThrougtFour = document.querySelector('.ray__througt-four'),
    rayThrougtFive = document.querySelector('.ray__througt-five'),
    rayThrougtSix = document.querySelector('.ray__througt-six'),
    rayThrougtSeven = document.querySelector('.ray__througt-seven'),
    rayThrougtEight = document.querySelector('.ray__througt-eight'),
    rayThrougtNine = document.querySelector('.ray__througt-nine'),
    dangerLineTwo = document.querySelector('.danger__line-two')

let body = document.querySelector('body')
let dangerous = document.querySelector('.danger')

    
    
// function over() {
  //     console.log(123);
  
  //     if (item.style.background == 'white') {
    //         console.log(123);
    //     }
    //     setTimeout(over, 2000); 
//   } 
let heal = document.querySelector('.heal__box')
let healTwo = document.querySelector('.heal__box-two')

let healths = 110

item.forEach((info) => {
    info.addEventListener('mousemove', () =>  {
      --healths
      console.log(healths);
      hpBar.style.width = `${healths * 2}px`
      if (healths <= 0) {
        lose.style.display = 'flex'
        page8.style.display = 'none'
      }
    })
  })
  heal.addEventListener('click', () => {
    heal.style.display = 'none'
    healths = healths + 50
    hpBar.style.width = `${healths * 2}px`
  })
  healTwo.addEventListener('click', () => {
    healTwo.style.display = 'none'
    healths = healths + 50
    hpBar.style.width = `${healths * 2}px`
  })
  
  


start.addEventListener('click', () => {
    time.style = 'display: none';
    start.style = 'display: none';
    page8.style = 'display: flex';
})


// function danger() {
    
//     if (dangerLine.style.display == 'flex') {
//       dangerLine.style.display = 'none';
//     }else {
//       dangerLine.style.display = 'flex';
//     }

//     setTimeout(danger, 1000); 
//   }
//   setTimeout(danger, 1000); 




let leftWall = document.querySelector('.item__left-wall')
let rightWall = document.querySelector('.item__right-wall')
let topWall = document.querySelector('.item__top-wall')
let bottomWall = document.querySelector('.item__bottom-wall')


function walls() {
    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }
    let a = getRandom(380, 490)
    let b = getRandom(380, 490)
    let c = getRandom(380, 490)
    let d = getRandom(380, 490)
    leftWall.style.left = `-${a}px`
    rightWall.style.right = `-${b}px`
    topWall.style.top = `-${c}px`
    bottomWall.style.bottom = `-${d}px`
    setTimeout(walls, 500); 
  }
  setTimeout(walls, 500); 

  
  
  
  function ray() {
    if (dangerRayOne.style.display == 'flex') {
      dangerRayOne.style.display  = 'none';
      function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }
      let a = getRandom(15, 85)
      dangerRayOne.style.top = `${a}%`
      rayThrougtOne.style.top = `${a}%`
    }else {
      dangerRayOne.style.display  = 'flex';
    }
    
    
    if (dangerRayTwo.style.display == 'flex') {
      dangerRayTwo.style.display  = 'none';
      function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }
      let a = getRandom(15, 85)
      dangerRayTwo.style.top = `${a}%`
      rayThrougtTwo.style.top = `${a}%`
    }else {
      dangerRayTwo.style.display  = 'flex';
    }
    
    
    if (dangerRayThree.style.display == 'flex') {
      dangerRayThree.style.display  = 'none';
      function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }
      let a = getRandom(15, 85)
      dangerRayThree.style.top = `${a}%`
      rayThrougtThree.style.top = `${a}%`
    }else {
      dangerRayThree.style.display  = 'flex';
    }
    
    
    if (dangerRayFour.style.display == 'flex') {
      dangerRayFour.style.display  = 'none';
      function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }
      let b = getRandom(5, 35)
      dangerRayFour.style.left = `${b}%`
      rayThrougtFour.style.left = `${b}%`
    }else {
      dangerRayFour.style.display  = 'flex';
    }
  
  
    if (dangerRayFive.style.display == 'flex') {
      dangerRayFive.style.display  = 'none';
      function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }
      let b = getRandom(5, 35)
      dangerRayFive.style.left = `${b}%`
      rayThrougtFive.style.left = `${b}%`
    }else {
      dangerRayFive.style.display  = 'flex';
    }
    
    
    if (dangerRaySix.style.display == 'flex') {
      dangerRaySix.style.display  = 'none';
      function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }
      let b = getRandom(5, 35)
      dangerRaySix.style.left = `${b}%`
      rayThrougtSix.style.left = `${b}%`
    }else {
      dangerRaySix.style.display  = 'flex';
    }


    if (dangerRaySeven.style.display == 'flex') {
      dangerRaySeven.style.display  = 'none';
      function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }
      let b = getRandom(5, 35)
      dangerRaySeven.style.right = `${b}%`
      rayThrougtSeven.style.right = `${b}%`
    }else {
      dangerRaySeven.style.display  = 'flex';
    }
    
    
    if (dangerRayEight.style.display == 'flex') {
      dangerRayEight.style.display  = 'none';
      function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }
      let b = getRandom(5, 35)
      dangerRayEight.style.right = `${b}%`
      rayThrougtEight.style.right = `${b}%`
    }else {
      dangerRayEight.style.display  = 'flex';
    }
    
    
    if (dangerRayNine.style.display == 'flex') {
      dangerRayNine.style.display  = 'none';
      function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }
      let b = getRandom(5, 35)
      dangerRayNine.style.right = `${b}%`
      rayThrougtNine.style.right = `${b}%`
    }else {
      dangerRayNine.style.display  = 'flex';
    }
    
    setTimeout(ray, 1000); 
  }
  setTimeout(ray, 1000); 
  
  
    function sword() {
      let ironSword = document.createElement('div')
      let img = document.createElement('img')
      img.src = 'images/Sword.webp'
      img.alt = 'Damage'
      ironSword.append(img)
      ironSword.classList.add('sword')
      let size = 70
      ironSword.style.width = `${size}px`
      ironSword.style.height = `${size}px`
      img.style.width = `${size}px`
      img.style.height = `${size}px`
      function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }
      let a = getRandom(10, 75)
      let b = getRandom(10, 75)
      ironSword.style.top = `${a}%`
      ironSword.style.right = `${b}%`
      page8.append(ironSword)
      
      ironSword.addEventListener('click', () => {
        let a = 0
        while(a <= 3) {
          a++
          kolvoClicks = kolvoClicks - 1
          healthEnemyBar.style.width = `${kolvoClicks * 5}px`
          clicksEvent()
        }
        ironSword.style.display = 'none'
      })
    }
    setInterval(() => {
      sword()
    }, 4200);


  let healthEnemyInfo = document.querySelector('.health__enemy-text')
  let deathWall = document.querySelector('.warning__death-wall')
  let deathSave = document.querySelector('.warning__death-save')
  let circle = document.querySelector('.circle')
  let kolvoClicks = 100
  let healthEnemyBar= document.querySelector('.health__enemy-bar')
circle.addEventListener('click', () => {
  function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }
      let a = getRandom(20, 80)
      let b = getRandom(20, 80)
      let c = getRandom(50, 100)
      circle.style.top = `${a}%`
      circle.style.left = `${b}%`
      circle.style.width = `${c}px`
      circle.style.height = `${c}px`
      --kolvoClicks
      healthEnemyBar.style.width = `${kolvoClicks * 5}px`
      clicksEvent()
    })

    function clicksEvent() {
    if (kolvoClicks == 85) {
      body.style.background = 'blue'
      dangerWallRight.style.display = 'flex'
      dangerRightWarning.style.display = 'flex'
      dangerWallTop.style.display = 'flex'
      dangerTopWarning.style.display = 'flex'

      setTimeout(() => {
        body.style.background = 'black'
      }, 300);
    }else if (kolvoClicks == 70) {
      body.style.background = 'blue'
      setTimeout(() => {
        body.style.background = 'black'
      }, 300);
      setInterval(() => {
        death()
      }, 14000);
    }else if (kolvoClicks <= 0) {
      kolvoClicks = 200
      setInterval(() => {
        function getRandom(min, max) {
          return Math.random() * (max - min) + min;
        }
        let a = getRandom(463728, 8437685637564559)
        healthEnemyInfo.innerHTML = a
      }, 50);
      setInterval(() => {
        sword()
      }, 4200);
    }
    }
    
    deathWall.addEventListener('mouseover', () => {
      healths = healths - 100
      hpBar.style.width = `${healths * 2}px`
    })


    function death() {
      function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }
      let a = getRandom(5, 75)
      let b = getRandom(5, 75)
        deathSave.style.top = `${a}%`
        deathSave.style.right = `${b}%`
        deathSave.style.display = 'flex'
        setTimeout(() => {
          deathWall.style.display = 'flex'
        }, 2000);
        setTimeout(() => {
          deathWall.style.display = 'none'
        }, 4000);
        setTimeout(() => {
          deathSave.style.display = 'none'
        }, 5000);
        dangerous.style.display = 'flex'

      
      
    }
    
    function healing() {
  if(heal.style.display !== 'flex') {
    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }
    let a = getRandom(5, 75)
    let b = getRandom(5, 75)
    heal.style.top = `${a}%`
    heal.style.right = `${b}%`
    heal.style.display = 'flex'
  }else {
    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }
    let a = getRandom(5, 75)
    let b = getRandom(5, 75)
    healTwo.style.top = `${a}%`
    healTwo.style.right = `${b}%`
    healTwo.style.display = 'flex'
  }
  
  setTimeout(healing, 10000); 
}
setTimeout(healing, 10000); 



let dangerWallRight = document.querySelector('.danger__wall-right')
let dangerRightWarning = document.querySelector('.danger__wall-warning')
let dangerWallTop = document.querySelector('.danger__wall-top')
let dangerTopWarning = document.querySelector('.danger__wall-warning-top')



dangerWallRight.addEventListener('mouseover', () => {
  healths = healths - 35
  hpBar.style.width = `${healths * 2}px`
})
dangerWallTop.addEventListener('mouseover', () => {
  healths = healths - 35
  hpBar.style.width = `${healths * 2}px`
})

function dangerWalls() {
  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  let a = getRandom(1,3 )
  let b = getRandom(0,80)
  let c = getRandom(0,80)


  if (a == 1) {
    dangerRightWarning.style.right = '2000px'
    setTimeout(() => {
      dangerWallRight.style.right = '2000px'

    }, 1000);
    setTimeout(() => {
      dangerRightWarning.style.top = `${b}%`
      dangerWallRight.style.top = `${b}%`
    }, 1500);
    setTimeout(() => {
      dangerRightWarning.style.right = '-500px'
    }, 2000);
    setTimeout(() => {
      dangerWallRight.style.right = '-500px'
      
    }, 3000);


  }else if (a == 2){
    dangerTopWarning.style.top = '1500px'
    setTimeout(() => {
      dangerWallTop.style.top = '1500px'

    }, 1000);
    setTimeout(() => {
      dangerTopWarning.style.right = `${c}%`
      dangerWallTop.style.right = `${c}%`
    }, 1500);
    setTimeout(() => {
      dangerTopWarning.style.top = '-500px'
    }, 2000);
    setTimeout(() => {
      dangerWallTop.style.top = '-500px'
      
    }, 3000);
    console.log(a);
  }
  setTimeout(dangerWalls, 4000); 
}
setTimeout(dangerWalls, 4000); 

function danger() {
    
  if (dangerLineTwo.style.visibility == 'visible') {
    dangerLineTwo.style.visibility = 'hidden';
  }else {
    dangerLineTwo.style.visibility = 'visible';
  }

  setTimeout(danger, 1000); 
}
setTimeout(danger, 1000); 

  

/* -------  Update  ------- */


let wallTRBL = document.querySelectorAll('.walls')
wallTRBL.forEach((item) => {
  item.addEventListener('mouseover', () => {
    healths = healths - 20
    hpBar.style.width = `${healths * 2}px`
  })
})

let dangerRays = document.querySelectorAll('.danger__ray'),
dangerRaysThr = document.querySelectorAll('.danger__ray-througt')
dangerRays.forEach((item) => {
  item.addEventListener('mouseover', () => {
    healths = healths - 5
    hpBar.style.width = `${healths * 2}px`
  })
})
dangerRaysThr.forEach((item) => {
  item.addEventListener('mouseover', () => {
    healths = healths - 5
    hpBar.style.width = `${healths * 2}px`
  })
})

// sword()
