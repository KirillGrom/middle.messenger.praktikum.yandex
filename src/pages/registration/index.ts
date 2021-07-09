// @ts-ignore
import Handlebars from 'handlebars';
import registrationTmpl from './registration.tmpl';
import Block from '../../modules/Block';
import RegisterForm from '../../components/registerForm';
import registerFormData from '../../components/registerForm/registerForm.data';
import Link from '../../components/link';
import Form from '../../modules/form';
import router from '../../services/router';
import AuthController from '../../controllers/auth/auth.controller';
import getFormDataValue from '../../utils/getFormDataValue';

export default class Registration extends Block {
	constructor() {
		const formService = new Form();
		const authController = new AuthController();
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
						const form = event.target as HTMLFormElement;
						const formData = new FormData(form);
						authController.signUp(getFormDataValue(formData));
					},
				},
			}),
			link: new Link({
				linkName: 'Войти',
				events: {
					click: (event: Event) => {
						event.preventDefault();
						router.go('/login');
					},
				},
			}),
		};
		super('div', {components});
	}

	render(): Function {
		return Handlebars.compile(registrationTmpl);
	}
}

