export class View {
    constructor(id, model, index) {
        this.model = model;
        this.el = document.querySelector(`#${id}`); 
        this.el.innerHTML = index;
    }
}