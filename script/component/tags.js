import { MAINBLOCK, CHECKBOXCLASS, LOCALSTORAGE } from "../const.js";
import { addTagInBody } from "../functions/addTagInBody.js";
import { deleteTagByIndex } from "../functions/deleteTagByIndex.js";
import { clearTagList } from "../functions/clearTagList.js";
import { changeAttribute } from "../functions/changeAttribute.js";
import { DOM } from "../dom.js";

export class Tags {
    #tagsArray = [];
    #readonly = false
    create() {
        document.body.innerHTML = MAINBLOCK
    }
    init() {
        this.create()
        if (this.getLocalStorage().length) {
            const tagList = this.getLocalStorage()
            tagList.forEach(tag => addTagInBody(tag))
            this.#tagsArray = tagList
        }
    }
    getTags() {
        return this.#tagsArray
    }
    get readonlyMode() {
        return this.#readonly
    }
    addTag(tag) {
        if (this.#readonly === false) {
            this.#tagsArray.push(tag)
            addTagInBody(tag)
            this.setItemInLocalStorage(tag)
        }
    }
    removeTag(index) {
        if (Number.isInteger(index) && this.#readonly === false) {
            deleteTagByIndex(this.#tagsArray, index) && this.setLocalStorage()
        } else {
            return 'Use the hashtag number or change readonlyMode'
        }
    }
    clearTagList() {
        if (this.#tagsArray.length && !this.#readonly) {
            this.#tagsArray = []
            clearTagList()
            this.setLocalStorage()
        } else {
            return 'TagList already empty or change readonlyMode'
        }
    }
    changeReadonlyMode() {
        const checkbox = DOM.find(CHECKBOXCLASS)
        const input = DOM.find('input[type=text]')
        if (checkbox && input) {
            this.#readonly = !this.#readonly
            changeAttribute(this.#readonly, input, 'readonly')
            changeAttribute(this.#readonly, checkbox, 'checked')
            return this.#readonly
        }
    }
    setLocalStorage() {
            localStorage.setItem(LOCALSTORAGE, JSON.stringify(this.#tagsArray || []))
        }
    setItemInLocalStorage(tag) {
        const tagList = this.getLocalStorage()
        localStorage.setItem(LOCALSTORAGE, JSON.stringify([...tagList, tag]))
    }
    getLocalStorage() {
        return JSON.parse(localStorage.getItem(LOCALSTORAGE) || '[]')
    }
}