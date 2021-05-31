
const submit = (form) => {
    if (!form.elements) {
        return;
    }
    const resultObject = Array.from(form.elements).reduce((acc, item) => {
        const hasAttribute = item.hasAttribute('name')
        if (hasAttribute) {
            const attributeName = item.getAttribute('name')
            acc[attributeName] = item.value;
        }
        return acc;
    }, {})
    console.log(resultObject)
}

const changeInputFile = (input) => {
    const filesLength = input.files.length
    const $parent = input.parentNode
    const $label = $parent.querySelector('.input-upload-file__label')
    const $name = $parent.querySelector('.input-upload-file__name')
    if (filesLength > 0) {
        const fileName = input.files[0].name
        $label.hidden = true
        $name.textContent = fileName
    } else {
        $label.hidden = false
        $name.textContent = ''
    }
    console.log(input)
}

export default {
    submit,
    changeInputFile
}