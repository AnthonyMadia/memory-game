/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
// - cards []   
//   face down ->  {'faceDown': 'cardVal'}
//   face up (not matched yet) ->  {'currentPick': 'cardVal'}
//   match -> {'matched': 'cardVal'}
// - message 
// - matchesRemaining
// - turn 1/-1
// - seconds
// - tickInterval
// - waitingForTimeout (boolean)
// - card1Idx/card1Val
// - card2Idx/card2Val


/*------------------------ Cached Element References ------------------------*/



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

// Write an init function
//   - set state variables to initial state
// Write a function to set difficulty
// Write a function to handle clicking on a card
//   - Based on 1st/2nd click --> different functionality
//   (compare card function?)
// Write a render function to display the state of the game
//   - Face down
//   - Face up (and not matched)
//   - Matched (stay face up)
// Write a function to handle incrementing a timer



/*-------------------------------- User Stories --------------------------------*/
// AAU, I should be able to select a difficulty level.
// AAU, I should see more cards if I pick a higher difficulty.
// AAU, I should be able to reset the game with a 'reset' button.
// AAU, I should be able to see the value of a card when it is clicked.
// AAU, if I make a match, the cards should remain face-up.
// AAU, if I do not make a match, the cards should flip back over, after a short delay.
// AAU, I should see the number of remaining matches after making my first match.
// AAU, I should see the total time it took to make all the matches.