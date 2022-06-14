import { DOM } from "../dom.js"

export function addHash(event, tags) {
    event.preventDefault()
    const input = DOM.find('input')
    if (input.value) {
        tags.addTag(input.value)
        input.value = ''
    }
}