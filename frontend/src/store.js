import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { getUsersReducer, userSaveReducer } from './reducer/userReducer'

const reducer = combineReducers({
  userSave: userSaveReducer,
  getUser: getUsersReducer
})

//Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux.
const middleware = [thunk]

//composewithdevtoos is crome extension we can see state
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default store
