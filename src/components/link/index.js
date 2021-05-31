import Handlebars from 'handlebars'
import LinkTmpl from './link.tmpl'

const render = Handlebars.compile(LinkTmpl,{noEscape:true})

export default  {
    render,
    template:LinkTmpl
}