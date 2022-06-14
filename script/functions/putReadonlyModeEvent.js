export function putReadonlyMode(event, tagList) {
    event.preventDefault()
    tagList.changeReadonlyMode()
}