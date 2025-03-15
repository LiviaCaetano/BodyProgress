import * as types from '../types'

type AuthState = {
  isLogged: boolean
  token: string
  person: {}
}

const initialState: AuthState = {
  isLogged: false,
  token: '',
  person: {}
}

export const auth = (state = initialState, action: any) => {
  switch (action?.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state }
      newState.isLogged = true
      newState.token = action?.payload?.person?.token
      newState.person = action?.payload?.person
      return newState
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState }
      return newState
    }

    default: {
      return state
    }
  }
}
