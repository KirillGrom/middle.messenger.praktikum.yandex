import layout from "../layout";
import profile from "../components/profile";
import profileBlock from "../components/profileBlock";
import avatar from "../components/avatar";
import {renderInDOM} from "../utils/renderInDOM";


const profileInfo = () => {
    return profileBlock.render({
        avatar:avatar.render({imgSrc:'',class:'avatar--big profile-block__avatar'}),
        name:profileBlock.data[2].value,
        inputList:profileBlock.data
    })
}
const layoutContent = [
    profile.render({
        href:'index.html',
        profileMain:profileInfo()
    })
].join('')


const template = layout.render({
    ...layout.data.profile,
    content: layoutContent
})



renderInDOM(document.querySelector('#app'),template)