import {View} from '../../framework/view';
import model from './model';
import index from './index.html';
import {dispatch} from '../../store/index';

class Component1View extends View {
    constructor() {
        super('component-1', model, index);
        this.el.querySelector('#dispatch-action-1').addEventListener('click', () => {
            dispatch({type: 'ACTION_1', entry: 'Message'});
        })
    }
}

export default Component1View;