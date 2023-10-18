

let images = document.querySelector('.ctn-img'); 
let point = document.querySelectorAll('.point');
let position = 0; 
let interval;

function updateActivePoint() {
    point.forEach((e, i) => {
      if (i === position) {
        point[i].classList.add('point--active');
      } else {
        point[i].classList.remove('point--active');
      }
    });
  }

  function autoAdvance() {
    if (position < 2) {
      position++;
    } else {
      position = 0;
    }
    let operation = position * -33.66;
    images.style.transform = `translateX(${operation}%)`;
    updateActivePoint();
  }


point.forEach((element,i) =>{  
point[i].addEventListener('click', ()=>{

    if (i === 0 && position > 0) {
        position--; 
      } else if (i === 1 && position < 1) {
        position++; 
      }else if(i === 2 && position < 2){
        position++;
      }else if(i === 1 && position > 0){
        position--;
      }



      let operation = position * -33.66; 
      images.style.transform = `translateX(${operation}%)`;
      updateActivePoint();


});

});

interval = setInterval(autoAdvance, 5000);

