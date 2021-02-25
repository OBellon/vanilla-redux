import {Model} from '../../framework/model';
import {connectModelToRedux} from '../../store/index';

class Component1Model extends Model {
    constructor() {
        super();
        this.id = 'component1';
        this.selectors = ['innerPropertyOfPart1', 'yetAnotherProperty'];
        connectModelToRedux(this);
    }
    onStoreChange() {
        console.log('Component 1 store change: ', this.attributes);
    }
}

export default Component1Model;