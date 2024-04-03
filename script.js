let currentIndexQuestion = 0
let timerInterval;

const win = document.querySelector('.win')
const lose = document.querySelector('.lose')
const timeup = document.querySelector('.time-up')
const questionSound = document.querySelector('.question-sound')

function displayQuestionAndOptions(){
  timerDisplay()
    const questionDisplay = document.getElementById("questionss")
    questionDisplay.textContent = questions[currentIndexQuestion].question


    const optionDisplay = document.getElementById("options-container")
    optionDisplay.textContent = ""

    questions[currentIndexQuestion].options.forEach((option)=> {
      const optionButton = document.createElement("button")
      optionButton.textContent = option
      optionDisplay.appendChild(optionButton)
      optionButton.onclick = ()=>choosenAnswer(option)
      
      

    })
    questionSound.play()
}
displayQuestionAndOptions()

function timerDisplay(){
  var countDown = 40
  var timer = document.getElementById("timer-countdown")

  timerInterval = setInterval (() => {
    countDown--
    timer.innerHTML = countDown

    if(countDown === 0) {
      clearInterval(timerInterval)
      var response = document.getElementById('result')
      response.textContent = 'Time Up'
      timeup.play()

      setTimeout(() => {
        gameOver()
      },3000);
    }
  },1000)
}



function choosenAnswer (answerClicked){
  var question = questions[currentIndexQuestion].question
  var answer = questions[currentIndexQuestion].correctAnswer

  clearInterval(timerInterval)

  if(answerClicked === answer) {
    
    var response = document.getElementById('result')
    response.textContent = 'You are correct'
    currentIndexQuestion++

    let timeOut = setTimeout(()=>{
      var response = document.getElementById('result')
      response.textContent = ''
    },2500)

    win.play()

   if(currentIndexQuestion < questions.length){
      displayQuestionAndOptions()
      prizeProgressFunction()
   }else{
      var response = document.getElementById('result') 
      response.textContent = 'CONGRATULATIONS YOU HAVE WON THE GAME'
  
      clearTimeout(timeOut)
   }

   // Wrong
  }else if(answerClicked !== answer && currentIndexQuestion <= 4 ){
    var response = document.getElementById('result')
    response.textContent = 'You are wrong and you have won $0'
    setTimeout(()=>{
      gameOver()
    }, 2000)
    lose.play()

  }
  else if(answerClicked !== answer && currentIndexQuestion <= 9 ){
    var response = document.getElementById('result')
    response.textContent = 'You are wrong and you won $5000'
    setTimeout(()=>{
      gameOver()
    }, 3000)
    lose.play()

  }else if(answerClicked !== answer && currentIndexQuestion <= 13){
    var response = document.getElementById('result')
    response.textContent = 'You are wrong and you won $100,000'
    setTimeout(()=>{
      gameOver()
    }, 3000)
    lose.play()
  }

  else{
    var response = document.getElementById('result')
    response.textContent = 'You are wrong, GAME OVER!'
    lose.play()

  }
  
}

function gameOver(){
  window.location.href = 'gameOver.html'
}


function prizeProgressFunction() {
  var prizeProgress = document.querySelectorAll('.prizeList p')
  var prizeProgressLength = prizeProgress.length //15
  
  
  prizeProgress.forEach(prizeElement => {
    prizeElement.classList.remove('activePrizeColor')
  })
 
  prizeProgress[prizeProgressLength-currentIndexQuestion].classList.add('activePrizeColor')
  
  if(currentIndexQuestion === 5) {
    var response = document.getElementById('result')
    response.textContent = 'CONGRATULATIONS YOU WON $5000 IN THE BANK'
    
    
    
  } else if(currentIndexQuestion === 10) {
    var response = document.getElementById('result')
    response.textContent = 'CONGRATULATIONS YOU WON $100,000 IN THE BANK'

  } else if(currentIndexQuestion === 15) {
    var response = document.getElementById('result')
    response.textContent = 'CONGRATULATIONS YOU WON $100,000 IN THE BANK'

  }
}



// Functional implementation for WalkAway.

function WalkAwayFunction () {
  const WalkAwayBtn = document.getElementById('walk-away-button')
  WalkAwayBtn.addEventListener("click", ()=>{
    if(currentIndexQuestion === 1){
      var response = document.getElementById('result')
      response.textContent = 'CONGRATULATIONS YOU WALK AWAY WITH $1,000'
      setTimeout(()=>{
        gameOver()
      }, 3000)

    }else if(currentIndexQuestion === 2) {
      var response = document.getElementById('result')
      response.textContent = 'CONGRATULATIONS YOU WALK AWAY WITH $2,000'
      setTimeout(()=>{
        gameOver()
      }, 3000)

    }else if(currentIndexQuestion === 3) {
      var response = document.getElementById('result')
      response.textContent = 'CONGRATULATIONS YOU WALK AWAY WITH $3,000'
      setTimeout(()=>{
        gameOver()
      }, 3000)

    }else if(currentIndexQuestion === 4) {
      var response = document.getElementById('result')
      response.textContent = 'CONGRATULATIONS YOU WALK AWAY WITH $4,000'
      setTimeout(()=>{
        gameOver()
      }, 3000)

    }else if(currentIndexQuestion === 5) {
      var response = document.getElementById('result')
      response.textContent = 'CONGRATULATIONS YOU WALK AWAY WITH $5,000'
      setTimeout(()=>{
        gameOver()
      }, 3000)

    }else if(currentIndexQuestion === 6) {
      var response = document.getElementById('result')
      response.textContent = 'CONGRATULATIONS YOU WALK AWAY WITH $10,000'
      setTimeout(()=>{
        gameOver()
      }, 3000)

    }else if(currentIndexQuestion === 7) {
      var response = document.getElementById('result')
      response.textContent = 'CONGRATULATIONS YOU WALK AWAY WITH $20,000'
      setTimeout(()=>{
        gameOver()
      }, 3000)

    }else if(currentIndexQuestion === 8) {
      var response = document.getElementById('result')
      response.textContent = 'CONGRATULATIONS YOU WALK AWAY WITH $30,000'
      setTimeout(()=>{
        gameOver()
      }, 3000)

    }else if(currentIndexQuestion === 9) {
      var response = document.getElementById('result')
      response.textContent = 'CONGRATULATIONS YOU WALK AWAY WITH $50,000'
      setTimeout(()=>{
        gameOver()
      }, 3000)

    }else if(currentIndexQuestion === 10) {
      var response = document.getElementById('result')
      response.textContent = 'CONGRATULATIONS YOU WALK AWAY WITH $100,000'
      setTimeout(()=>{
        gameOver()
      }, 3000)

    }else if(currentIndexQuestion === 11) {
      var response = document.getElementById('result')
      response.textContent = 'CONGRATULATIONS YOU WALK AWAY WITH $500,000'
      setTimeout(()=>{
        gameOver()
      }, 3000)

    }else if(currentIndexQuestion === 12) {
      var response = document.getElementById('result')
      response.textContent = 'CONGRATULATIONS YOU WALK AWAY WITH $1,000,000'
      setTimeout(()=>{
        gameOver()
      }, 3000)

    }else if(currentIndexQuestion === 13) {
      var response = document.getElementById('result')
      response.textContent = 'CONGRATULATIONS YOU WALK AWAY WITH $2,500,000'
      setTimeout(()=>{
        gameOver()
      }, 3000)

    }else if(currentIndexQuestion === 14) {
      var response = document.getElementById('result')
      response.textContent = 'CONGRATULATIONS YOU WALK AWAY WITH $5,000,000'
      setTimeout(()=>{
        gameOver()
      }, 3000)

    }else if(currentIndexQuestion === 15) {
      var response = document.getElementById('result')
      response.textContent = 'CONGRATULATIONS YOU WALK AWAY WITH $10,000,000'
      setTimeout(()=>{
        gameOver()
      }, 3000)  

    }else{
      var response = document.getElementById('result')
      response.textContent = 'You failed'
      setTimeout(()=>{
        gameOver()
      }, 3000)
    }
  })
}
WalkAwayFunction()



function FiftyFifty() {
  var FiftyFiftybtn = document.getElementById('btn-fifty')
  FiftyFiftybtn.addEventListener('click', ()=>{
    var correctAnswer = questions[currentIndexQuestion].correctAnswer
    var wrongAnswers = questions[currentIndexQuestion].options.filter(wrongAns => wrongAns !== correctAnswer)
    var selectRandomAnswer = wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)]

    var optionButtons = document.querySelectorAll('#options-container button')
    

    optionButtons.forEach(button=>{
      if(button.textContent !== correctAnswer && button.textContent !== selectRandomAnswer){
       button.style.display = 'none'
      }
    })

    FiftyFiftybtn.disabled = true
    FiftyFiftybtn.style.textDecoration = '3px red line-through' 
   
  })
}

FiftyFifty()

function callAfriend() {
  var callBtn = document.getElementById('callAfriend')

  callBtn.addEventListener("click", ()=>{
    var correctOption = questions[currentIndexQuestion].correctAnswer
    var response = document.getElementById('result')
    response.textContent = `Your friend thinks the answer is ${correctOption.toUpperCase()}`
    callBtn.disabled = true
    callBtn.style.textDecoration = '3px red line-through' 

  })
}
callAfriend()
