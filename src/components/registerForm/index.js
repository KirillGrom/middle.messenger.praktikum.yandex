import Handlebars from 'handlebars';
import registerFormTmpl from './registerForm.tmpl';
import registerFormData from './registerForm.data';


const render = Handlebars.compile(registerFormTmpl,{noEscape:true})

export default {
    render,
    template:registerFormTmpl,
    data:registerFormData
}