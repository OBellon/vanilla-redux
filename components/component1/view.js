import {View} from '../../framework/view';
import model from './model';

class Component1View extends View {
    constructor() {
        super('component-1', model);
    }
}

export default Component1View;