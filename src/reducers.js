import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
// ... other reducers
import pageone from './screens/pageOne/reducer'

export default combineReducers({
    routing: routerReducer,
    pageone
})
