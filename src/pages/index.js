import layout from "../layout";
import aside from "../components/aside";
import main from "../components/main";
import {renderInDOM} from "../utils/render";
import chatList from "../components/chatList";
import chatItem from "../components/chatItem";
import avatar from "../components/avatar";
import search from "../components/search";
import link from "../components/link";


const asideContentMain =  () => {
   return  chatList.render({
        contentList: chatList.data.contentList.map(data => {
            const avatarContent = avatar.render({
                class:'chat-item__avatar',
                imgSrc:data.imgSrc
            })
            return chatItem.render({avatar:avatarContent,...data})
        })
    })
}
const asideContentTop =  () => {
    return [
        link.render({
            href:'/profile.html',
            class:'link--gray aside__link',
            linkName: 'Профиль'
        }),
        search.render({text:'Поиск'})
    ].join('')
}

const mainContent = () => {
    return {
        class:'layout__main',
        isEmpty:true,
    }
}
const layoutContent = [
    aside.render({
        class: 'layout__aside',
        content: asideContentMain(),
        contentTop: asideContentTop()
    }),
    main.render(mainContent())
].join('')


const template = layout.render({
    ...layout.data.chat,
    content: layoutContent

})



renderInDOM(document.querySelector('#app'),template)