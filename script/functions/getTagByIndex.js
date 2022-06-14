import {DOM} from './../dom.js'

export function getTagByIndex(index, className) {
    let arr = DOM.findAll(className)
    if (!arr.length) {
        return null
    } else {
        let newArr = []
        arr.forEach(v => newArr.push(v))
        return newArr.find((_, i) => i === index)
    }
}