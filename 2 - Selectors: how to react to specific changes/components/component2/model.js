import {Model} from '../../framework/model';
import {connectModelToRedux} from '../../store/index';

class Component2Model extends Model {
    constructor() {
        super();
        this.id = 'component2';
        this.selectors = ['innerPropertyOfPart2'];
        connectModelToRedux(this);
    }
    onStoreChange() {
        console.log('Component 2 store change: ', this.attributes);
    }
}

export default Component2Model;