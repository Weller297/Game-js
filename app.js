


let item = document.querySelectorAll('.item'),
    lose = document.querySelector('.over'),
    time = document.querySelector('.timeout'),
    start = document.querySelector('.start'),
    dangerLine = document.querySelectorAll('.danger__line'),
    dangerThrougt = document.querySelectorAll('.danger__line-througt'),
    colors = document.querySelectorAll('.colors'),
    codeContainers = document.querySelectorAll('.color__container'),
    end = document.querySelector('.end'),
    itsAll = document.querySelector('.it__is-all')

    
    
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

})






dangerLine.forEach((info) => {
  function danger() {


    if (info.style.display == 'flex') {
      info.style.display = 'none';
    }else {
      info.style.display = 'flex';
    }

    setTimeout(danger, 1666); 
  }
  setTimeout(danger, 1666); 
  
})


function container() {
  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
  let a = getRandom(140, 220)

  dangerLine.forEach((info) => {
    info.style = `transform: rotate(${a}deg);`
  })

  dangerThrougt.forEach((info) => {
      info.style = `transform: rotate(${a}deg);`
    
  })

  setTimeout(container, 2000); 
}
setTimeout(container, 2000); 







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





