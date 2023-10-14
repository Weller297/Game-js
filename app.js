


let item = document.querySelectorAll('.item'),
    lose = document.querySelector('.over'),
    time = document.querySelector('.timeout'),
    start = document.querySelector('.start'),
    dangerLine = document.querySelectorAll('.danger__line')

    
    
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
  
    setTimeout(danger, 1000); 
  }
  setTimeout(danger, 1000); 

})






