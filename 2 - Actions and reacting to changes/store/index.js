import {
    createStore,
} from 'redux';
import {rootReducer} from './reducers/index';

const connectedModels = [];
const store = createStore(rootReducer);

store.subscribe(() => {
    connectedModels.forEach(triggerModelChange);
});

const triggerModelChange = (modelClass) => {
    if (typeof modelClass.onStoreChange === 'function') {
        modelClass.onStoreChange(store.getState());        
    }
};

export const connectModelToRedux = (modelClass) => {
    console.log(`Adding ${modelClass.id} to the connectedModels`);
    connectedModels.push(modelClass);
    return modelClass;
};

export const getStore = () => store.getState();
export const dispatch = store.dispatch;

console.log('Store initialized!')