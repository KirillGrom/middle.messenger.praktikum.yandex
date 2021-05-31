import Handlebars from 'handlebars';
import ProfileTmpl from './profile.tmpl';

const render  = Handlebars.compile(ProfileTmpl,{noEscape:true})

export default  {
    render,
    template:ProfileTmpl,
}