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
const onBoxClick = function (event) {
  console.log(event.target)
  console.log(event.target.id)
  console.log('YOU CLICKED A BOX')
  // add an if statement that will add an X to box if it is X's turn, if O's turn, wont add if the spot is invalid
  if (event.target !== 'X' || event.target !== 'O' /* && currentPlayer === 'X' */) {
    $(event.target).text('X')
  } else if (event.target !== 'X' || event.target !== 'O' /* && currentPlayer === 'X' */) {
    $(event.target).text('O')
  }
  // api.boxClick()
  //   .then(ui.onClickBoxSuccess)
  //   .catch(ui.onClickBoxFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onBoxClick
}
