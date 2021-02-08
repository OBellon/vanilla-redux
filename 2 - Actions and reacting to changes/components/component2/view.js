import {View} from '../../framework/view';
import model from './model';
import index from './index.html';

class Component2View extends View {
    constructor() {
        super('component-2', model, index);
    }
}

export default Component2View;