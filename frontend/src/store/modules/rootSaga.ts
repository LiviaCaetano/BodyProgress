import { AllEffect, all } from 'redux-saga/effects'

import auth from './auth/sagas'

export default function* rootSaga(): Generator<AllEffect<unknown>> {
  return yield all([auth])
}
