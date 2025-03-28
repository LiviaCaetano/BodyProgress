import * as types from '../types'

export const loginRequest = (payload: any) => {
  return {
    type: types.LOGIN_REQUEST,
    payload
  }
}

export const loginSuccess = (payload: any) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload
  }
}

export const loginFailure = (payload?: any) => {
  return {
    type: types.LOGIN_FAILURE,
    payload
  }
}
