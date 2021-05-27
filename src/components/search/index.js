import Handlebars from 'handlebars';
import SearchTmpl from './search.tmpl'


const render  =  Handlebars.compile(SearchTmpl);


export default  {
    render,
    template: SearchTmpl,
}