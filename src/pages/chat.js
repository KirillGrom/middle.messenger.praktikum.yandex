import layout from "../layout";
import aside from "../components/aside";
import main from "../components/main";
import {renderInDOM} from "../utils/render";
import chatList from "../components/chatList";
import chatItem from "../components/chatItem";
import avatar from "../components/avatar";
import search from "../components/search";
import link from "../components/link";
import header from "../components/header";
import footer from "../components/footer";
import messages from "../components/messages";
import message from "../components/message";


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
            href:'profile.html',
            class:'link--gray aside__link',
            linkName: 'Профиль'
        }),
        search.render({text:'Поиск'})
    ].join('')
}

const mainContentHeader = () => {
    return header.render({
        avatar:avatar.render({
            class:'header__avatar',
            imgSrc: chatList.data.contentList[0].imgSrc,
        }),
        name:chatList.data.contentList[0].name
    })
}

const mainContentFooter = () => {
    return footer.render({})
}

const messagesContent = () => {

  const compiledDateTime = message.render({
      isDataTime:true,
      time:messages.data[0].date,
      class:'message-item__date-time'
  })
  const compiledMessage =   messages.data[0].messages.reduce((acc,{type,text,time}) => {
        acc.push(message.render({
            message: text,
            time,
            class: type === 'person' ? 'message-item--person' : 'message-item--my'
        }))
            return acc

    },[]).join('')

    return  messages.render({content:[compiledDateTime,compiledMessage].join('')})
}



const mainContent = () => {
    return {
        class:'layout__main',
        isEmpty:false,
        contentHeader:mainContentHeader(),
        contentMain:messagesContent(),
        contentFooter: mainContentFooter()
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