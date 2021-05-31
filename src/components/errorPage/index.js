import Handlebars from 'handlebars'
import ErrorPageTmpl from './errorPage.tmpl'

const render = Handlebars.compile(ErrorPageTmpl,{ noEscape: true })

export default {
    render,
    template:ErrorPageTmpl,
}