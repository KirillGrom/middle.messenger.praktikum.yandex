import Handlebars from 'handlebars'
import boxModalTmpl from './boxModal.tmpl'

const render = Handlebars.compile(boxModalTmpl, { noEscape: true })

export default {
    render,
    template: boxModalTmpl
}