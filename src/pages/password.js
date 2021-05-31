import layout from "../layout";
import profile from "../components/profile";
import passwordEdit from "../components/passwordEdit";
import avatar from "../components/avatar";
import {renderInDOM} from "../utils/renderInDOM";


const profileEditRender = () => {
    return passwordEdit.render({
        avatar:avatar.render({imgSrc:'',class:'avatar--big profile-edit__avatar'}),
        inputList:passwordEdit.data
    })
}
const layoutContent = [
    profile.render({
        href:'index.html',
        profileMain:profileEditRender()
    })
].join('')


const template = layout.render({
    ...layout.data.profile,
    content: layoutContent
})



renderInDOM(document.querySelector('#app'),template)