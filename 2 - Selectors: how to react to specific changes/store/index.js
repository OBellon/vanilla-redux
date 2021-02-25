import {
    createStore,
} from 'redux';
import {rootReducer} from './reducers/index';
import selectors from './selectors/index';

const connectedModels = [];
const store = createStore(rootReducer);

store.subscribe(() => {
    connectedModels.forEach(mapStateToSelectors);
});

const triggerModelChange = (modelClass) => {
    if (typeof modelClass.onStoreChange === 'function') {
        modelClass.onStoreChange();        
    }
};

export const connectModelToRedux = (modelClass) => {
    console.log(`Adding ${modelClass.id} to the connectedModels`);
    connectedModels.push(modelClass);
    return modelClass;
};

const mapStateToSelectors = (modelClass) => {
    if (Array.isArray(modelClass.selectors)) {
        modelClass.selectors
            .forEach((selector) => {
                const selectorValue = selectors[selector](store.getState());
                    if (selectorValue) {
                        modelClass.set(selector, selectorValue);
                    }
            });
            triggerModelChange(modelClass);
    }
};

export const getStore = () => store.getState();
export const dispatch = store.dispatch;

console.log('Store initialized!')