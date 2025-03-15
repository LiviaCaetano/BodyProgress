import { get } from 'lodash'
import { toast } from 'react-toastify'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { api } from '../../../services/api'
import * as types from '../types'
import * as actions from './actions'

function* loginRequest(payload: any): Generator<any, void, any> {
  try {
    const response = yield call(api.post, '/auth/login', { ...payload.payload })
    
    yield put(actions.loginSuccess({ ...response?.data }))
    api.defaults.headers.Authorization = `Bearer ${response?.data?.token}`
    window.location.reload()
    toast.success('Login realizado com sucesso!')
  } catch (e) {
    console.log(e)
    toast.error('Usuário ou senha inválidos')
    yield put(actions.loginFailure())
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
