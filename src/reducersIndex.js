import { combineReducers } from 'redux'
import homePage from './reducers/homePage'
import article from './reducers/article'


const rootReducer = combineReducers({homePage,article});
export default rootReducer;