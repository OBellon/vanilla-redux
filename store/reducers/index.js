import {combineReducers} from 'redux';
import reducer1 from './reducer1';
import reducer2 from './reducer2';

const appReducer = combineReducers({
    reducer1,
    reducer2,
});

export const rootReducer = (state, action) => {
    return appReducer(state, action);
};
