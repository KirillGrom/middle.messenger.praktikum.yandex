import Handlebars from 'handlebars';
import HeaderTmpl from './header.tmpl';

const render = Handlebars.compile(HeaderTmpl,{noEscape:true});


export default  {
    render,
    template:HeaderTmpl
}