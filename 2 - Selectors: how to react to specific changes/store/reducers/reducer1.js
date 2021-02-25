import {
    ACTION_1,
} from '../actions/index';

export default function reducer1(state = {}, action) {
    switch (action.type) {
        case ACTION_1:
            return Object.assign({}, state, {innerPropertyOfPart1: action.entry});
        default:
            return state;
    }
}
