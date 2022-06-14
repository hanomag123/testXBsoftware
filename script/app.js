import {DOM} from './dom.js'
import {Tags} from './component/tags.js'
import {removeHash} from './functions/removeHashTagEvent.js'
import {putReadonlyMode} from './functions/putReadonlyModeEvent.js'
import {addHash} from './functions/addHashTagEvent.js'

window.tagList = new Tags()
tagList.init()

const AddButton = DOM.find('.add')
const checkBoxButton = DOM.find('.readonly')

AddButton.addEventListener('click', () => addHash(event, tagList))
document.addEventListener('click', () => removeHash(event, tagList))
checkBoxButton.addEventListener('click', () => putReadonlyMode(event, tagList))





