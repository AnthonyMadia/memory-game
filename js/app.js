/*-------------------------------- Constants --------------------------------*/
const deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]

const difficulty = {
  "easy": 5,
  "medium": 10,
  "hard": 15
}

/*---------------------------- Variables (state) ----------------------------*/
let cards, message, matchesRemaining, turn, seconds, tickInterval, waitingForTimeout, card1Idx, card1Val, card2Idx, card2Val



/*------------------------ Cached Element References ------------------------*/
const resetDiv = document.getElementById('reset-div')
const difficultyBtns = document.getElementById('difficulty-buttons')
const messageEl = document.getElementById('message')
const playArea = document.getElementById('play-area')
const resetBtn = document.getElementById('reset-button')

/*----------------------------- Event Listeners -----------------------------*/

difficultyBtns.addEventListener('click', function(evt) {
  if (evt.target.classList.contains("btn")) {
    difficultyBtns.classList.add("hidden")
    resetDiv.classList.remove("hidden")
    setDifficulty(difficulty[evt.target.id])
  }
})
resetBtn.addEventListener('click', init)

playArea.addEventListener('click', function(evt) {
  console.log(evt.target)
})


/*-------------------------------- Functions --------------------------------*/
init()

function init() {

  difficultyBtns.classList.remove("hidden")
  resetDiv.classList.add("hidden")
  message = "Please Select Difficulty"
  waitingForTimeout = false
  turn = 1
  playArea.innerHTML = "" // <- clears cards from playing field
  cards = []
  matchesRemaining = 0
  seconds = 0
  //interval
  clearInterval(tickInterval)
  tickInterval = setInterval(tick, 1000)
  render()
}

function tick() {
  seconds++
}

function handleCardClick() {
  // if turn is 1 handle first card
  // if turn is -1 handle the second card being picked
  turn *= -1
}

function setDifficulty(numCards) {
  message = 'Pick a card!'
  let deckCopy = [...deck]
  let randomCard
  let cardsToShuffle = []
  for (let i = 0; i < numCards; i++) {
    randomCard = deckCopy.splice(Math.random() * deckCopy.length , 1)[0]
    cardsToShuffle.push(randomCard, randomCard)
  }
  matchesRemaining = numCards
  shuffle(cardsToShuffle)
}

function shuffle(cardsIn) {
  // shuffle cards passed in 
  console.log(cardsIn)
  // set cards array using the newly shuffled items
  render() 
  
}

function render() {
  console.log('render invoked')
  messageEl.textContent = message
}


// PsuedoCode:
// Write init function
//   - set state variables to initial state
// Write a function to set difficulty
// Write a function to handle clicking on a card
//   - Based on 1st/2nd click --> different functionality
//   (compare card function)
// Write a render function to display state of the game 
//   - Face down
//   - Face up (and not matched)
//   - Matched (stay face up)
// Write a function to handle incrementing a timer


/*-------------------------------- User Stories --------------------------------*/
// AAU, I should see more cards if I pick a higher difficulty.
// AAU, I should be able to reset the gaem with a 'reset' button
// AAU, I should be able to see the value of a card when it is clicked
// AAU, if I make a match, the cards should flip back over after a short delay
// AAU, I should see the number of the remaining mathces after making my first match
// AAU, I sohuld see the toal time it took to make all the matches