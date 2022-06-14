import {DOM} from './../dom.js'
import {CLOSEBUTTON} from './../const.js'

export function addTagInBody (tag) {
    const hashElem = DOM.create('div')
    hashElem.classList.add('hashTag')
    hashElem.innerHTML = '#' + tag + CLOSEBUTTON 
}