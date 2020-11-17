import model from './model';
import view from './view';

class Component1 {
    constructor() {
        this.view = new view();
        this.model = new model();
    }
}

export default Component1;

