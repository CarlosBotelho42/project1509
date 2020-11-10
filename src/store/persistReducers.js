import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'yoloy',
      storage,
      whitelist: ['auth', 'user', 'dashboard'],
    },
    reducers
  )
  return persistedReducer
}
