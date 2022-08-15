
import { configureStore, combineReducers} from '@reduxjs/toolkit'

import pomodoro_reducer from './pomodoro/pomodoro_reducer';
import settings_reducer from './settings/settings_reducer';
import user_reducer from './user/user_reducer';

const globalReducer= combineReducers({
    pomodoro: pomodoro_reducer,
    settings: settings_reducer,
    user: user_reducer


})
const store = configureStore({
    reducer:globalReducer
});

export {
    store 
}