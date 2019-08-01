import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import accountReducer from './modules/account';

export default combineReducers({
  session: sessionReducer,
  account: accountReducer,
});
