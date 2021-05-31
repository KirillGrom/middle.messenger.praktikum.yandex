import Handlebars from 'handlebars';
import FooterTmpl from './footer.tmpl'

const render = Handlebars.compile(FooterTmpl,{noEscape:true});

export default  {
    render,
    template:FooterTmpl,
}