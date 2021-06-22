// @ts-ignore
import Handlebars from 'handlebars';
import loginTmpl from './login.tmpl';
import {renderInDOM} from '../../utils/renderInDOM';
import AuthForm from '../../components/authForm';
import authFormData from '../../components/authForm/authForm.data';
import Block from '../../modules/Block';
import {BlockType} from '../../types/block.type';
import Link from '../../components/link';
import Form from '../../modules/form';

export default class Login extends Block {
	constructor(props: BlockType) {
		const formService = new Form();
		const components = {
			authForm: new AuthForm({
				enterFields: authFormData,
				events: {
					focusout: (event:Event) => {
						formService.inputEventHandler(event);
					},
					focusin: (event:Event) => {
						formService.inputEventHandler(event);
					},
					submit: (event:Event) => {
						formService.submit(event);
					},
				},
			}),
			link: new Link({
				href: '/registration.html',
				linkName: 'Нет аккаунта?',
			}),
		};
		super('div', {...props, components});
	}

	render():Function {
		return Handlebars.compile(loginTmpl);
	}
}

renderInDOM(document.querySelector('#app'), new Login({
}).getContent());
