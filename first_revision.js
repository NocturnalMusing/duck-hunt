window.onload = function () {
    const body = document.body;
  
    console.log(body);
  
    function createDuck() {
  
      let createDiv = document.createElement('div')
      createDiv.classList.add('duck')
      document.body.append(createDiv)
  
      setInterval(function () {
        createDiv.classList.toggle('flap')
      }, 250)
  
      let moveDuck = function (duck) {
        duck.style.left = Math.random() * window.innerWidth + 'px'
        duck.style.top = Math.random() * window.innerHeight + 'px'
      }
  
      let randomPosition = function (duck) {
        duck.style.left = Math.random() * window.innerWidth + 'px'
        duck.style.top = Math.random() * window.innerHeight + 'px'
      }
      randomPosition(createDiv)
      
      setInterval(function () {
        moveDuck(createDiv)
      }, 1000)
  
      return createDiv
    }
    createDuck()
  
    for ( let i = 0; i < 4; i++ ) {
      createDuck()
    }
  
    let ducks = document.getElementsByTagName('div')
  
    for ( let i = 0; i < 5; i++ ) {
      ducks[i].addEventListener('click', function() {
        ducks[i].classList.add('shot')
  
        setTimeout(function() {
          ducks[i].remove()
        }, 1000)
      })
      checkForWinner()
    }
  
    function checkForWinner() {
      if (ducks.length === 0) {
        alert(' YOU WIN! ')
      } 
    }
  
    setInterval(function() {
      console.log(ducks.length)
      checkForWinner()
    }, 1000)
  };