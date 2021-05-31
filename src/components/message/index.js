import Handlebars from 'handlebars';
import MessageTmpl from './message.tmpl';

const render = Handlebars.compile(MessageTmpl);


export default  {
    render,
    template:MessageTmpl,
}