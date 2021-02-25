import {createSelector} from 'reselect';

const getPart2Store = (store) => store.reducer2;

const innerPropertyOfPart2Selector = createSelector(getPart2Store, (part2) => part2 && part2.innerPropertyOfPart2);
const yetAnotherPropertySelector = createSelector(innerPropertyOfPart2Selector, (innerPropertyOfPart2) => {
    return innerPropertyOfPart2 && innerPropertyOfPart2.yetAnotherProperty;
});

export default {
    innerPropertyOfPart2: (store) => innerPropertyOfPart2Selector(store),
    yetAnotherProperty: (store) => yetAnotherPropertySelector(store),
};