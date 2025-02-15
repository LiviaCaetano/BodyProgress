import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export default (reducers: any) => {
  const persistedReducers = persistReducer(
    {
      key: 'BODYPROGRESS',
      storage,
      whitelist: ['auth']
    },
    reducers
  )

  return persistedReducers
}
