import { DOM } from "../dom.js"

export function getIndexOfTag(element, className) {
    let arr = DOM.findAll(className)
    let newArr = []
    arr.forEach(v => newArr.push(v))
    return newArr.findIndex(v => v === element)
}