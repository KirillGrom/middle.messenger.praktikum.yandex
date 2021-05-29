import layout from "../layout";
import profile from "../components/profile";
import profileEdit from "../components/profileEdit";
import avatar from "../components/avatar";
import {renderInDOM} from "../utils/renderInDOM";


const profileEditRender = () => {
    return profileEdit.render({
        avatar:avatar.render({imgSrc:'',class:'avatar--big profile-edit__avatar'}),
        name:profileEdit.data[2].value,
        inputList:profileEdit.data
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