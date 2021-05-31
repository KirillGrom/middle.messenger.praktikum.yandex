import Handlebars from 'handlebars';
import PasswordEditTmpl from './passwordEdit.tmpl';
import PasswordEditData from './passwordEdit.data'

const render = Handlebars.compile(PasswordEditTmpl,{noEscape:true});

export default  {
    render,
    data:PasswordEditData,
    template:PasswordEditTmpl,
}