import errorPage from '../components/errorPage'
import layout from "../layout";
import {renderInDOM} from "../utils/render";



const layoutContent = [
    errorPage.render({
        code:'500',
        text:'Мы уже фиксим',
    })
].join('')


const template = layout.render({
    ...layout.data.enter,
    content: layoutContent,
})



renderInDOM(document.querySelector('#app'),template)