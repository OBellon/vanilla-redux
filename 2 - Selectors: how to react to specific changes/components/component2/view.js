import {View} from '../../framework/view';
import model from './model';
import index from './index.html';
import {dispatch} from '../../store/index';

class Component2View extends View {
    constructor() {
        super('component-2', model, index);
        this.el.querySelector('#dispatch-action-2').addEventListener('click', () => {
            dispatch({type: 'ACTION_2', entry: {anotherProperty: 1234, yetAnotherProperty: true}});
        });
    }
}

export default Component2View;