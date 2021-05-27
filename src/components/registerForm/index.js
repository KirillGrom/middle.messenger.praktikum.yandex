import Handlebars from 'handlebars';
import registtationFormTmpl from './registtationForm.tmpl';
import registtationFormData from './registtationForm.data';


const render = Handlebars.compile(EnterFormTmpl,{noEscape:true})

export default {
    render,
    template:EnterFormTmpl,
    data:EnterFormData
}