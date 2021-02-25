import {createSelector} from 'reselect';

const getPart1Store = (store) => store.reducer1;

const innerPropertyOfPart1Selector = createSelector(getPart1Store, (part1) => part1 && part1.innerPropertyOfPart1);

export default {
    innerPropertyOfPart1: (store) => innerPropertyOfPart1Selector(store),
};