// @ts-ignore
import Handlebars from 'handlebars';
import loginTmpl from './login.tmpl';
import AuthForm from '../../components/authForm';
import authFormData from '../../components/authForm/authForm.data';
import Block from '../../modules/Block';
import Link from '../../components/link';
import Form from '../../modules/form';
import router from '../../services/router';
import getFormDataValue from '../../utils/getFormDataValue';
import AuthController from '../../controllers/auth/auth.controller';

const formService = new Form();
const authController = new AuthController();

export default class Login extends Block {
	constructor() {
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
						const form = event.target as HTMLFormElement;
						const formData = new FormData(form);
						authController.signIn(getFormDataValue(formData));
					},
				},
			}),
			link: new Link({
				linkName: 'Нет аккаунта?',
				events: {
					click: (event: Event) => {
						event.preventDefault();
						router.go('/signup');
					},
				},
			}),
		};
		super('div', {components});
	}

	render():Function {
		return Handlebars.compile(loginTmpl);
	}
}

