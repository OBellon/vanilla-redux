export class View {
    constructor(id, model) {
        this.model = model;
        this.el = document.getElementById(id); 
    }
}