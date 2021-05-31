import Handlebars from 'handlebars'
import ChatListTmpl from './chatList.tmpl'
import ChatListData from './chatList.data'

const render = Handlebars.compile(ChatListTmpl,{noEscape:true})

export default  {
    render,
    data:ChatListData,
    template:ChatListTmpl,
}