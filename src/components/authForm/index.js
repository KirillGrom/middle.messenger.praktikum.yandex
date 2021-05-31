import Handlebars from 'handlebars';
import AuthFormTmpl from './authForm.tmpl';
import AuthFormData from './authForm.data';


const render = Handlebars.compile(AuthFormTmpl,{noEscape:true})

export default {
    render,
    template:AuthFormTmpl,
    data:AuthFormData
}