import {Model} from '../../framework/model';
import {connectModelToRedux} from '../../store/index';

class Component2Model extends Model {
    constructor() {
        super();
        this.id = 'component2';
        connectModelToRedux(this);
    }
    onStoreChange(store) {
        console.log('Component 2 store change: ', store);
    }
}

export default Component2Model;