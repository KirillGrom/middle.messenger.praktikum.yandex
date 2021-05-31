import Handlebars from 'handlebars';
import profileEditTmpl from './profileEdit.tmpl';
import profileEditData from './profileEdit.data';


const render = Handlebars.compile(profileEditTmpl,{noEscape:true});

export default  {
    render,
    template:profileEditTmpl,
    data: profileEditData,
}