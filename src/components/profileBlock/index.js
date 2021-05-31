import Handlebars from 'handlebars';
import ProfileBlockTmpl from './profileBlock.tmpl';
import ProfileBlockData from './profileBlock.data';


const render = Handlebars.compile(ProfileBlockTmpl,{noEscape:true});

export default  {
    render,
    template:ProfileBlockTmpl,
    data: ProfileBlockData,
}