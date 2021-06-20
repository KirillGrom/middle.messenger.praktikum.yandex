import registrationTmpl from './registration.tmpl';
import {renderInDOM} from '../../utils/renderInDOM';
import Block from '../../modules/Block';
import RegisterForm from '../../components/registerForm';
import registerFormData from '../../components/registerForm/registerForm.data';
import {BlockType} from '../../types/block.type';
import Link from '../../components/link';
import Form from '../../modules/form';

export default class Registration extends Block {
	constructor(props: BlockType) {
		const formService = new Form();
		const components = {
			registerForm: new RegisterForm({
				enterFields: registerFormData,
				class: ['enter-form__form'],
				events: {
					focusout: (event:Event) => {
						formService.inputEventHandler(event);
					},
					focusin: (event:Event) => {
						formService.inputEventHandler(event);
					},
					submit: (event:Event) => {
						formService.submit(event.currentTarget as HTMLFormElement);
					},
				},
			}),
			link: new Link({
				href: '/login.html',
				class: ['link', 'link--blue', 'enter-form__link'],
				linkName: 'Войти',
			}),
		};
		super('div', {...props, components});
	}

	render(): HTMLElement {
		return this._compile(registrationTmpl)({
			...this.props,
			components: {
				registerForm: this.props.components.registerForm.getContent(),
				link: this.props.components.link.getContent(),
			},
		});
	}
}

renderInDOM(document.querySelector('#app'), new Registration({class: ['wrapper']}).getContent());
