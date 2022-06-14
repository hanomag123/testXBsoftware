import { HASHTAGCLASS } from "../const.js"
import { getTagByIndex } from "./getTagByIndex.js"

export function deleteTagByIndex(arrayOfTags, index) {
    arrayOfTags.splice(index, 1)
    const elem = getTagByIndex(index, HASHTAGCLASS)
            if (elem) {
                elem.remove()
                return true
            } else {
                return 'No hashtags'
            }
}