'use strict'

const store = require('../store')

const onSignUpSucess = function (data) {
  $('#message').text('Successful sign up!')
  $('#message').removeClass()
  $('#signInMessage').text('')
  $('#sign-up').trigger('reset')
  // console.log('onSignUpSucess data is: ', data)
}

const onSignUpFailure = function () {
  $('#message').text('Did not sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#sign-up').trigger('reset')
  // console.log('onSignUpFailure data is: ', error)
}

const onSignInSucess = function (data) {
  $('#signInMessage').text('Successful sign in')
  $('#signInMessage').removeClass()
  $('#sign-in').addClass('hidden')
  $('#sign-up').addClass('hidden')
  $('#change-password').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#new-game').removeClass('hidden')
  $('#total-games').removeClass('hidden')
  $('#totalGamesMessage').text('')
  $('#signUpMessage').text('')
  $('#message').text('')
  $('#sign-in').trigger('reset')
  // console.log('onSignInSucess data is: ', data)
  store.user = data.user
}

const onSignInFailure = function () {
  $('#sign-in').trigger('reset')
  $('#signInMessage').text('Wrong password or email')
  $('#signInMessage').removeClass()
  $('#signInMessage').addClass('failure')
  // console.log('onSignInFailure data is: ', error)
}

const onChangePasswordSuccess = function (data) {
  $('#change-password').trigger('reset')
  $('#passwordChangeMessage').text('You changed your password!')
  $('#passwordChangeMessage').removeClass()
  $('#signInMessage').text('')
  // console.log('onChangePasswordSuccess data is: ', data)
}

const onChangePasswordFailure = function () {
  $('#change-password').trigger('reset')
  $('#passwordChangeMessage').text('You did not change your password')
  $('#passwordChangeMessage').removeClass()
  $('#passwordChangeMessage').addClass('failure')
  // console.log('onChangePasswordFailure data is: ', error)
}

const onSignOutSuccess = function (data) {
  $('#sign-out').trigger('reset')
  $('#signInMessage').text('You signed out')
  $('#signInMessage').removeClass()
  $('#sign-in').removeClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#change-password').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#total-games').addClass('hidden')
  $('#new-game').addClass('hidden')
  $('.container').addClass('hidden')
  $('#newGameMessage').text('')
  $('#currentTurn').text('')
  $('#passwordChangeMessage').text('')
  $('#gameEndMessage').text('')
  // console.log('onSignOutSuccess data is: ', data)
}

const onSignOutFailure = function () {
  $('#sign-out').trigger('reset')
  $('#signOutMessage').text('Sign out failed')
  $('#signOutMessage').removeClass()
  $('#signOutMessage').addClass('failure')
  // console.log('onSignOutFailure data is: ', error)
}

const onNewGameSuccess = function (data) {
  $('#new-game').trigger('reset')
  $('#newGameMessage').text('created a new game')
  $('#newGameMessage').removeClass()
  $('.container').removeClass('hidden')
  $('#gameEndMessage').text('')
  $('#currentTurn').text('Turn: X')
  $('#signInMessage').text('')
  // console.log('onNewGameSuccess data is: ', data)
  store.game = data
  for (let i = 0; i < 9; i++) {
    $('#' + i).text('')
  }
}

const onNewGameFailure = function () {
  $('#new-game').trigger('reset')
  $('#newGameMessage').text('Game cant be created')
  $('#newGameMessage').removeClass()
  $('#newGameMessage').addClass('failure')
  // console.log('onNewGameFailure data is: ', error)
}

const onUpdateGameSuccess = function (data) {
  $('#newGameMessage').text('created a new game update')
  $('#newGameMessage').removeClass()
  // console.log('onUpdateGameSuccess data is: ', data)
}

const onUpdateGameFailure = function () {
  $('#newGameMessage').text('Game cant be updated')
  $('#newGameMessage').removeClass()
  $('#newGameMessage').addClass('failure')
  // console.log('onUpdateFailure data is: ', error)
}

const onTotalGamesSuccess = function (data) {
  store.totalGames = data.games.length
  // console.log('onTotalGameSuccess data is: ', data)
  $('#total-games').removeClass('hidden')
  $('#totalGamesMessage').text('Total games played: ' + store.totalGames)
}

module.exports = {
  onSignUpSucess,
  onSignUpFailure,
  onSignInSucess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onNewGameSuccess,
  onNewGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onTotalGamesSuccess
}
