export class DOM {
    static create(tagname) {
        const elem = document.createElement(tagname)
        document.body.appendChild(elem)
        return elem;
    }
    static find(selector) {
        return document.querySelector(selector)
    }
    static findAll(selector) {
        return document.querySelectorAll(selector)
    }
}