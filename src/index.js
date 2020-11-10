import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './config/ReactotronConfig'
import 'bootstrap/dist/css/bootstrap.min.css'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
