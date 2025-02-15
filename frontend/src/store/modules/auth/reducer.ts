import * as types from '../types'

type AuthState = {
  isLogged: boolean
  token: string
  user: {}
}

const initialState: AuthState = {
  isLogged: false,
  token: '',
  user: {}
}

export const auth = (state = initialState, action: any) => {
  switch (action?.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state }
      newState.isLogged = true
      newState.token = action?.payload?.token
      newState.user = action?.payload?.user
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
