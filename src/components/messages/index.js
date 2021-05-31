import Handlebars from 'handlebars';
import MessagesTmpl from './messages.tmpl';
import MessagesData from './messages.data';

const render = Handlebars.compile(MessagesTmpl,{noEscape:true});

export default {
    render,
    data: MessagesData,
    template:MessagesTmpl,
}