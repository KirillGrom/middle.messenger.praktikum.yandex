import errorPage from '../components/errorPage'
import layout from "../layout";
import {renderInDOM} from "../utils/renderInDOM";

const layoutContent = [
    errorPage.render({
        code:'404',
        text:'Не туда попали',
    })
].join('')


const template = layout.render({
    ...layout.data.error,
    content: layoutContent,
})

renderInDOM(document.querySelector('#app'),template)