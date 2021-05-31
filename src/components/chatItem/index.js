import Handlebars from 'handlebars'
import ChatItemTmpl from './chatItem.tmpl'

const render = Handlebars.compile(ChatItemTmpl,{ noEscape: true })


export default  {
    render,
    template:ChatItemTmpl,
}