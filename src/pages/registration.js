import layout from "../layout";
import {renderInDOM} from "../utils/render";
import registerForm from '../components/registerForm'
import enterField from '../components/enterField'
import link from '../components/link'



const inputFieldCompiling = () => {
    return registerForm.data.map((item) => enterField.render(item)).join('')
}

const layoutContent = [
    registerForm.render({
        content:inputFieldCompiling(),
        link:link.render({
            href:'/login.html',
            class:'link--blue enter-form__link',
            linkName:'Войти',
        })
    })
].join('')


const template = layout.render({
    ...layout.data.enter,
    content: layoutContent,
})



renderInDOM(document.querySelector('#app'),template)