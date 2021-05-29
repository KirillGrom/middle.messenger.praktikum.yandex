import layout from "../layout";
import {renderInDOM} from "../utils/renderInDOM";
import authForm from '../components/authForm'
import enterField from '../components/enterField'
import link from '../components/link'


const inputFieldCompiling = () => {
    return authForm.data.map((item) => enterField.render(item)).join('')
}

const layoutContent = [
    authForm.render({
        content:inputFieldCompiling(),
        link:link.render({
            href:'/registration.html',
            class:'link--blue enter-form__link',
            linkName:'Нет аккаунта?',
        })
    })
].join('')


const template = layout.render({
    ...layout.data.enter,
    content: layoutContent,
})



renderInDOM(document.querySelector('#app'),template)