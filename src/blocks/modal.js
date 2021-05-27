import modal from "../components/modal";
import boxModal from "../components/boxModal";
import enterField from "../components/enterField";
import inputUploadFile from "../components/inputUploadFile";
import {renderInDOM} from "../utils/render";

const template = modal.render({
    contentList: [
        {
            id: modal.data.addUser.id,
            content: boxModal.render({
                ...modal.data.addUser,
                contentMain: enterField.render(''),
                contentActions: ''
            })
        },
        {
            id: modal.data.removeUser.id,
            content: boxModal.render({
                ...modal.data.removeUser,
                contentMain: enterField.render(''),
                contentActions: `<button class="button"></button>`
            })
        },
        {
            id: modal.data.uploadFile.id,
            content: boxModal.render({
                ...modal.data.uploadFile,
                contentMain: inputUploadFile.render({
                    contentLabel: 'Выбрать файл на компьютере',
                    name: 'avatar'
                }),
                contentActions: `<button class="button"></button>`
            })
        },
        {
            id: modal.data.removeChat.id,
            content: boxModal.render({
                ...modal.data.removeChat,
                contentMain: '',
                contentActions: `<button class="button"></button>`
            })
        }
    ]
})

renderInDOM(document.querySelector('#modal'), template)