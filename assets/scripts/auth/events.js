'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

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

// create function for when you click a box, O is added
const onBoxClick = function () {
  // console.log(event.target)
  // console.log(event.target.id)
  // console.log('YOU CLICKED A BOX')
  // add an if statement that will add an X to box if it is X's turn, if O's turn, wont add if the spot is invalid
  // If where you clicked is blank
  if ($(event.target).text() === '' && currentPlayer === 'X') {
    $(event.target).text('X')
    board[event.target.id] = 'X'
    currentPlayer = 'O'
  } else if ($(event.target).text() === '' && currentPlayer === 'O') {
    $(event.target).text('O')
    board[event.target.id] = 'O'
    currentPlayer = 'X'
  } else {
    $('#boxClickMessage').text('Invalid move')
  }
}

// create function that goes through the array of board and checks if any win possiblilties are there like 0, 1, 2 = X
// Horiz (0,1,2) (3,4,5) (6,7,8) Vert (0,3,6) (1,4,7) (2,5,8) Diag (0,4,8) (2,4,6)
const checkForWin = function () {
  if (board[0] !== '' && board[0] === board[1] && board[0] === board[2]) {
    console.log('Win 1')
    return true
  } else if (board[3] !== '' && board[3] === board[4] && board[3] === board[5]) {
    console.log('Win 2')
    return true
  } else if (board[6] !== '' && board[6] === board[7] && board[6] === board[8]) {
    console.log('Win 3')
    return true
  } else if (board[0] !== '' && board[0] === board[3] && board[0] === board[6]) {
    console.log('Win 4')
    return true
  } else if (board[1] !== '' && board[1] === board[7] && board[1] === board[8]) {
    console.log('Win 5')
    return true
  } else if (board[2] !== '' && board[2] === board[5] && board[2] === board[8]) {
    console.log('Win 6')
    return true
  } else if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
    console.log('Win 7')
    return true
  } else if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
    console.log('Win 8')
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

let board = [
  '', '', '',
  '', '', '',
  '', '', ''
]

// const winConditions = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ]

// create way to track currentPlayer, and change on click
let currentPlayer = 'X'

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onBoxClick,
  board,
  currentPlayer,
  checkForWin
}
