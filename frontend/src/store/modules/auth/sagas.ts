import { get } from 'lodash'
import { toast } from 'react-toastify'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { api } from '../../../services/api'
import * as types from '../types'
import * as actions from './actions'

function* loginRequest(payload: any): Generator<any, void, any> {
  try {
    const response = yield call(api.post, '/tokens', payload)
    
    yield put(actions.loginSuccess({ ...response.data }))
    
    toast.success('Login realizado com sucesso!')

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`
  } catch (e) {
    toast.error('Usuário ou senha inválidos')
    yield put(actions.loginFailure)
    window.location.reload()
  }
}

function persistRehydrate(data: any) {
  const token = get(data?.payload, 'auth.token')
  if (!token) return
  api.defaults.headers.Authorization = `Bearer ${token}`
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate)
])
