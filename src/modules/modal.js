const openModal = (id) => {
    const modal = document.querySelector('.modal')
    const modalContent = document.querySelector(`.modal__content[data-id='${id}']`)

    if (!modal && !modalContent) return;

    modal.hidden = false;
    modalContent.hidden = false;
}

const closeModal = (id) => {
    const modal = document.querySelector('.modal')
    const modalContent = document.querySelector(`.modal__content[data-id='${id}']`)

    if (!modal && !modalContent) return;

    modal.hidden = true;
    modalContent.hidden = true;
}

const handleCloseModal = ($modalInner, $modalContent, e) => {

    if (e.target === $modalInner) {
        $modalContent.forEach((el) => {
            el.hidden = true;
        })

        $modalInner.parentNode.hidden = true;
    }
}

const initEvents = () => {
    const modalInner = document.querySelector('.modal__inner')
    const modalContent = document.querySelectorAll(`.modal__content`)

    if(!modalInner || !modalContent) {
        return
    }

    modalInner.addEventListener('click', (e) =>  handleCloseModal(modalInner, modalContent,e))
}


export default {
    openModal,
    closeModal,
    initEvents,
    handleCloseModal
}