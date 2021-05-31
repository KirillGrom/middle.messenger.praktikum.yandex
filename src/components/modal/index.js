import Handlebars from 'handlebars'
import modalData from './modal.data'
import modalTmpl from './modal.tmpl'

const render = Handlebars.compile(modalTmpl, {noEscape: true})

export default {
    render,
    data: modalData,
    template: modalTmpl
}