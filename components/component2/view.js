import {View} from '../../framework/view';
import model from './model';

class Component2View extends View {
    constructor() {
        super('component-2', model);
    }
}

export default Component2View;