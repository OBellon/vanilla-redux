import {
    ACTION_2,
} from '../actions/index';

export default function reducer1(state = {}, action) {
    switch (action.type) {
        case ACTION_2:
            return Object.assign({}, state, {action: action.entry});
        default:
            return state;
    }
}
