import { combineReducers } from 'redux'
// ... other reducers
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    routing: routerReducer
})
