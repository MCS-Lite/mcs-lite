import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'

const configureStore = initialState => createStore(
  reducer,
  initialState,

  // ref: https://github.com/zalmoxisus/redux-devtools-extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default configureStore
