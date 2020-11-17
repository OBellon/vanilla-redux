import {Model} from '../../framework/model';
import {connectModelToRedux} from '../../store/index';

class Component1Model extends Model {
    constructor() {
        super();
        this.id = 'component1';
        connectModelToRedux(this);
    }
    onStoreChange(store) {
        console.log('Component 1 store change: ', store);
    }
}

export default Component1Model;