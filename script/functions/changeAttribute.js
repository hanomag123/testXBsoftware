export function changeAttribute(readonlyMode, element, attribute) {
    readonlyMode ? element.setAttribute(attribute, 'true') : element.removeAttribute(attribute)
}