import { DOM } from "../dom.js"
import { HASHTAGCLASS } from "../const.js"

export function clearTagList() {
    const tags = DOM.findAll(HASHTAGCLASS)
    tags.forEach(el => el.remove())
}