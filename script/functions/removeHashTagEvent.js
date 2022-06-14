import { HASHTAGCLASS } from "../const.js"
import { getIndexOfTag } from "./getIndexOfTag.js"

export function removeHash(event, tags) {
    if (event.target.classList.contains('closeButton')) {
        const hashTag = event.target.closest(HASHTAGCLASS)
        const index = getIndexOfTag(hashTag, HASHTAGCLASS)
        tags.removeTag(index)
    }
}