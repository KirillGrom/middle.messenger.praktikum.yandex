import Handlebars from 'handlebars';
import enterFieldTmpl from './enterField.tmpl';

const render = Handlebars.compile(enterFieldTmpl);

export default {
    render,
    template:enterFieldTmpl,
}