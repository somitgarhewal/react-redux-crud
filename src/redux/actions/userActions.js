import { ADD_NEW_USER, DELETE_USER, UPDATE_USER } from '../types'

export const addNewUser = (payload) => ({
  type: ADD_NEW_USER,
  payload
})

export const deleteUser = (payload) => ({
  type: DELETE_USER,
  payload
})

export const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload
})

