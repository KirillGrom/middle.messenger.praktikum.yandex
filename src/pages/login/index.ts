import loginTmpl from './login.tmpl';
import {renderInDOM} from '../../utils/renderInDOM';
import AuthForm from '../../components/authForm';
import authFormData from '../../components/authForm/authForm.data';
import Block from '../../modules/Block';
import {BlockType} from '../../types/block.type';
import Link from '../../components/link';
import Form from '../../modules/form';

export default class Login extends Block {
	constructor(props:BlockType) {
		const formService = new Form();
		const components = {
			authForm: new AuthForm({
				enterFields: authFormData,
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
				href: '/registration.html',
				class: ['link', 'link--blue', 'enter-form__link'],
				linkName: 'Нет аккаунта?',
			}),
		};
		super('div', {...props, components});
	}

	render():HTMLElement {
		console.log('authForm', this.props.components.authForm.getContent());
		return this._compile(loginTmpl)({
			...this.props,
			components: {
				authForm: this.props.components.authForm.getContent(),
				link: this.props.components.link.getContent(),
			},
		});
	}
}

renderInDOM(document.querySelector('#app'), new Login({
	class: ['wrapper'],
}).getContent());
