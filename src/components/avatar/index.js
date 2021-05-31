import Handlebars from 'handlebars'
import AvatarTmpl from './avatar.tmpl'

const render = Handlebars.compile(AvatarTmpl,{ noEscape: true })

export default {
    render,
    template:AvatarTmpl,
}