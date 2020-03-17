'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

let board =
[ '', '', '',
  '', '', '',
  '', '', '' ]

// create onSignUp function
const onSignUp = function (event) {
  event.preventDefault()
  console.log('Signing up')
  const data = getFormFields(event.target)
  api.signUp(data)
    .then(ui.onSignUpSucess)
    .catch(ui.onSignUpFailure)
}

// create onSignIn function
const onSignIn = function (event) {
  event.preventDefault()
  console.log('Signed In')
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.onSignInSucess)
    .catch(ui.onSignInFailure)
}

// create onChangePassword function
const onChangePassword = function (event) {
  event.preventDefault()
  console.log('on password change')
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

// create onSignOut function
const onSignOut = function (event) {
  event.preventDefault()
  console.log('on sign out')
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

// new game function
const onNewGame = function (event) {
  // const board = store.game.game.cells
  event.preventDefault()
  console.log('creating new game')
  // const data = getFormFields(event.target)
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
  for (let i = 0; i < 9; i++) {
    board[i] = ''
  }
  currentPlayer = 'X'
}

const onUpdateBoard = function (index, value) {
  event.preventDefault()
  console.log('updating board')
  api.updateBoard()
    .then(ui.onUpdateBoardSuccess)
    .catch(ui.onUpdateBoardFailure)
}

// create function for when you click a box, O is added
const onBoxClick = function () {
  if (store.game.over === true) return
  // console.log(board.every(isGameOver))
  // console.log(event.target)
  // console.log(event.target.id)
  // console.log('YOU CLICKED A BOX')
  // add an if statement that will add an X to box if it is X's turn, if O's turn, wont add if the spot is invalid
  // If where you clicked is blank
  // end game when there is a winner
  if (checkForWin() !== true) {
    // const board = store.game.game.cells
    if ($(event.target).text() === '' && currentPlayer === 'X') {
      $(event.target).text('X')
      store.game.game.cells[event.target.id] = 'X'
      store.gameState.position = event.target.id
      store.gameState.value = currentPlayer
      checkForWin()
      store.gameState.over = isGameOver
      // check to see if the game is over and nobody has won
      if (store.game.game.cells.every(isGameOver) === true) {
        // console.log('DRAW')
        $('#gameEndMessage').text('It is a draw!')
        return
      }
      // console.log(store.game)
      currentPlayer = 'O'
      $('#currentTurn').text('Turn: ' + currentPlayer)
    } else if ($(event.target).text() === '' && currentPlayer === 'O') {
      $(event.target).text('O')
      store.game.game.cells[event.target.id] = 'O'
      store.gameState.position = event.target.id
      store.gameState.value = currentPlayer
      checkForWin()
      store.gameState.over = isGameOver
      // check to see if the game is over and nobody has won
      if (store.game.game.cells.every(isGameOver) === true) {
        // console.log('DRAW')
        $('#gameEndMessage').text('It is a draw!')
        return
      } else if (checkForWin() === true) {
        checkForWin()
        return
      }
      // console.log(store.game)
      currentPlayer = 'X'
      $('#currentTurn').text('Turn: ' + currentPlayer)
    } else {
      if (store.game.game.cells.every(isGameOver) === false) {
        // console.log('DRAW')
        $('#boxClickMessage').text('Invalid move')
      }
    }
  } else {
    // console.log('Start a new game')
    $('#gameEndMessage').text('Start a new game to keep playing!')
    // $('#currentTurn').addClass('hidden')
  }
}

// create function that goes through the array of board and checks if any win possiblilties are there like 0, 1, 2 = X
// Horiz (0,1,2) (3,4,5) (6,7,8) Vert (0,3,6) (1,4,7) (2,5,8) Diag (0,4,8) (2,4,6)
const checkForWin = function () {
  const board = store.game.game.cells
  if (board[0] !== '' && board[0] === board[1] && board[0] === board[2]) {
    // console.log('Win 1')
    $('#gameEndMessage').text('Player ' + currentPlayer + ' wins!')
    return true
  } else if (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) {
    // console.log('Win 2')
    $('#gameEndMessage').text('Player ' + currentPlayer + ' wins!')
    return true
  } else if (board[6] !== '' && board[6] === board[7] && board[6] === board[8]) {
    // console.log('Win 3')
    $('#gameEndMessage').text('Player ' + currentPlayer + ' wins!')
    return true
  } else if (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) {
    // console.log('Win 4')
    $('#gameEndMessage').text('Player ' + currentPlayer + ' wins!')
    return true
  } else if (board[1] !== '' && board[1] === board[7] && board[1] === board[8]) {
    // console.log('Win 5')
    $('#gameEndMessage').text('Player ' + currentPlayer + ' wins!')
    return true
  } else if (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) {
    // console.log('Win 6')
    $('#gameEndMessage').text('Player ' + currentPlayer + ' wins!')
    return true
  } else if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
    // console.log('Win 7')
    $('#gameEndMessage').text('Player ' + currentPlayer + ' wins!')
    return true
  } else if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
    // console.log('Win 8')
    $('#gameEndMessage').text('Player ' + currentPlayer + ' wins!')
    return true
  }
}

/*
// // if statement then return win message, else lose message, else draw
// for loop that goes through board array, and if statements that check if [0,1,2].every('X')
// check if win condition array indicies all equal the same thing in the board array
for (let i = 0; i < winConditions.length; i++) {
  if (winConditions.every() === winConditions.every()) {

  }
}
*/

// write function that loops through board to check if game is over (board is full)
// use . every to call this function in the on box click function.

const isGameOver = (value) => value !== ''
// const isGameOver = function (data) {
//   if (checkForWin === true) {
//     return true
//   } else if (data !== '') {
//     return true
//   }
// }
// loop thorugh board and check if everything is not blank
// console.log(board.every(isGameOver))

// create way to track currentPlayer, and change on click
let currentPlayer = 'X'

const onTotalGames = function (event) {
  event.preventDefault()
  console.log('total games check')
  api.totalGames()
    .then(ui.onTotalGamesSuccess)
}

// create clear board function in here, then run it in UI
// add a footer in html for linkedin link or something

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onBoxClick,
  board,
  currentPlayer,
  checkForWin,
  isGameOver,
  onNewGame,
  onUpdateBoard,
  onTotalGames
}
