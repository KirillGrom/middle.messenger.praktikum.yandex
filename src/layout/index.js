import Handlebars from 'handlebars'
import layoutData from './layout.data'
import layoutTmpl from './layout.tmpl'

const render = Handlebars.compile(layoutTmpl, {noEscape: true})


export default {
    render,
    data: layoutData,
    template: layoutTmpl
}