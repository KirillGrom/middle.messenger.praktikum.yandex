import Handlebars from 'handlebars'
import inputUploadFileTmpl from './inputUploadFile.tmpl'

const render = Handlebars.compile(inputUploadFileTmpl, { noEscape: true })

export default {
    render,
    template: inputUploadFileTmpl
}