import Handlebars from 'handlebars';
import MainTmpl from './main.tmpl';


const render = Handlebars.compile(MainTmpl,{noEscape:true})

export default  {
    render,
    template:MainTmpl,
}