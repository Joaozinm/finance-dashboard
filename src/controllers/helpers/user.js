import validator from 'validator'
import { badRequest } from '../helpers.js'

export const invalidPasswordResponse = () =>
    badRequest({
        message: 'Password must have at least 6 characters',
    })

export const emailIsAlreadyInUseResponse = () =>
    badRequest({ message: 'Invalid email. Provide a valid one.' })

export const invalidIdResponse = () =>
    badRequest({
        message: 'The provided ID is not valid',
    })

export const checkIfPasswordIsValid = (password) => password.length >= 6

export const checkIfEmailIsValid = (email) => validator.isEmail(email)
