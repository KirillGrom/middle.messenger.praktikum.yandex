// @ts-ignore
import Handlebars from 'handlebars';
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
				events: {
					focusout: (event:Event) => {
						formService.inputEventHandler(event);
					},
					focusin: (event:Event) => {
						formService.inputEventHandler(event);
					},
					submit: (event:Event) => {
						event.preventDefault();
						formService.submit(event);
					},
				},
			}),
			link: new Link({
				href: '/login.html',
				linkName: 'Войти',
			}),
		};
		super('div', {...props, components});
	}

	render(): Function {
		return Handlebars.compile(registrationTmpl);
	}
}

renderInDOM(document.querySelector('#app'), new Registration({}).getContent());
