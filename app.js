


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
    page4.style = 'display: flex';
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


  function rayOne() {
    if (dangerRayOne.style.display == 'flex') {
      dangerRayOne.style.display  = 'none';
      function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }
      let a = getRandom(0, 100)
      dangerRayOne.style.top = `${a}%`
      rayThrougtOne.style.top = `${a}%`
    }else {
      dangerRayOne.style.display  = 'flex';
    }

    setTimeout(rayOne, 1000); 
  }
  setTimeout(rayOne, 1000); 
  function rayTwo() {
    if (dangerRayTwo.style.display == 'flex') {
      dangerRayTwo.style.display  = 'none';
      function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }
      let a = getRandom(0, 100)
      dangerRayTwo.style.top = `${a}%`
      rayThrougtTwo.style.top = `${a}%`
    }else {
      dangerRayTwo.style.display  = 'flex';
    }

    setTimeout(rayTwo, 1000); 
  }
  setTimeout(rayTwo, 1000); 
  function rayThree() {
    if (dangerRayThree.style.display == 'flex') {
      dangerRayThree.style.display  = 'none';
      function getRandom(min, max) {
        return Math.random() * (max - min) + min;
      }
      let a = getRandom(0, 100)
      dangerRayThree.style.top = `${a}%`
      rayThrougtThree.style.top = `${a}%`
    }else {
      dangerRayThree.style.display  = 'flex';
    }

    setTimeout(rayThree, 1000); 
  }
  setTimeout(rayThree, 1000); 



// function container() {
//   function getRandom(min, max) {
//     return Math.random() * (max - min) + min;
//   }
//   let a = getRandom(140, 220)

//   dangerLine.forEach((info) => {
//     info.style = `transform: rotate(${a}deg);`
//   })

//   dangerThrougt.forEach((info) => {
//       info.style = `transform: rotate(${a}deg);`
    
//   })

//   setTimeout(container, 2000); 
// }
// setTimeout(container, 2000); 







codeContainers.forEach((item) => {
  item.style.background = 'none'
})
colors[0].addEventListener('click', () => {
    if (codeContainers[0].style.background == 'none') {
      codeContainers[0].style = 'background: blue'
      
    }else if (codeContainers[1].style.background == 'none') {
      codeContainers[1].style = 'background: blue'
      
    }else if (codeContainers[2].style.background == 'none') {
      codeContainers[2].style = 'background: blue'
      
    }else if (codeContainers[3].style.background == 'none') {
      codeContainers[3].style = 'background: blue'
      
    }
  })
  colors[1].addEventListener('click', () => {
    if (codeContainers[0].style.background == 'none') {
      codeContainers[0].style = 'background: green'
      
    }else if (codeContainers[1].style.background == 'none') {
      codeContainers[1].style = 'background: green'
      
    }else if (codeContainers[2].style.background == 'none') {
      codeContainers[2].style = 'background: green'
      
    }else if (codeContainers[3].style.background == 'none') {
      codeContainers[3].style = 'background: green'
      
    }
  })
  colors[2].addEventListener('click', () => {
    if (codeContainers[0].style.background == 'none') {
      codeContainers[0].style = 'background: yellow'
      
    }else if (codeContainers[1].style.background == 'none') {
      codeContainers[1].style = 'background: yellow'
      
    }else if (codeContainers[2].style.background == 'none') {
      codeContainers[2].style = 'background: yellow'
      
    }else if (codeContainers[3].style.background == 'none') {
      codeContainers[3].style = 'background: yellow'
      
    }
  })
  colors[3].addEventListener('click', () => {
    if (codeContainers[0].style.background == 'none') {
      codeContainers[0].style = 'background: red'
      
    }else if (codeContainers[1].style.background == 'none') {
      codeContainers[1].style = 'background: red'
      
    }else if (codeContainers[2].style.background == 'none') {
      codeContainers[2].style = 'background: red'
      
    }else if (codeContainers[3].style.background == 'none') {
      codeContainers[3].style = 'background: red'
      
    }
  })
  colors[8].addEventListener('click', () => {
    codeContainers.forEach((item) => {
      item.style.background = 'none'
    })  
  })
  colors[9].addEventListener('click', () => {
    if (codeContainers[0].style.background == 'red' && codeContainers[1].style.background == 'blue' && codeContainers[2].style.background == 'yellow' && codeContainers[3].style.background == 'green') {
      end.style.display = 'flex'
      console.log(end);
    }else {
      alert('НЕ ВЕРНО');
      lose.style = "display: flex"

    }

  })

let secretWallOne = document.querySelector('.secret__key-wall');


secretWallOne.addEventListener('mouseover', () => {
  secretWallOne.style.opacity = '0'
  setTimeout(() => {
    secretWallOne.style.display = 'none'
  }, 1000);
})

  



  


