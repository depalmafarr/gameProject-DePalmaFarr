'use strict'

const store = require('../store')

const onSignUpSucess = function (data) {
  $('#message').text('Successful sign up!')
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log('onSignUpSucess data is: ', data)
}

const onSignUpFailure = function (error) {
  $('#message').text('Did not sign up')
  $('#message').removeClass()
  $('#message').addClass('failure')
  console.log('onSignUpFailure data is: ', error)
}

const onSignInSucess = function (data) {
  $('#signInMessage').text('Successful sign in')
  $('#signInMessage').removeClass()
  $('#signInMessage').addClass('success')
  console.log('onSignInSucess data is: ', data)
  store.user = data.user
}

const onSignInFailure = function (error) {
  $('#signInMessage').text('Wrong password or email')
  $('#signInMessage').removeClass()
  $('#signInMessage').addClass('failure')
  console.log('onSignInFailure data is: ', error)
}

const onChangePasswordSuccess = function (data) {
  $('#passwordChangeMessage').text('You changed your password!')
  $('#passwordChangeMessage').removeClass()
  $('#passwordChangeMessage').addClass('success')
  console.log('onChangePasswordSuccess data is: ', data)
}

const onChangePasswordFailure = function (error) {
  $('#passwordChangeMessage').text('You did not change your password')
  $('#passwordChangeMessage').removeClass()
  $('#passwordChangeMessage').addClass('failure')
  console.log('onChangePasswordFailure data is: ', error)
}

const onSignOutSuccess = function (data) {
  $('#signOutMessage').text('You signed out')
  $('#signOutMessage').removeClass()
  $('#signOutMessage').addClass('success')
  console.log('onSignOutSuccess data is: ', data)
}

const onSignOutFailure = function (error) {
  $('#signOutMessage').text('Sign out failed')
  $('#signOutMessage').removeClass()
  $('#signOutMessage').addClass('failure')
  console.log('onSignOutFailure data is: ', error)
}

module.exports = {
  onSignUpSucess,
  onSignUpFailure,
  onSignInSucess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
