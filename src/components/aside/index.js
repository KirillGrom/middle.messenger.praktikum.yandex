 import Handlebars from 'handlebars'
 import asideTmpl from './aside.tmpl';



 const render = Handlebars.compile(asideTmpl, {noEscape: true})

 export default {
     render,
     template: asideTmpl
 }