import Handlebars from 'handlebars';
import loginTmpl from './login.tmpl';
import AuthForm from '../../components/authForm';
import authFormData from '../../components/authForm/authForm.data';
import Block from '../../modules/Block';
import Link from '../../components/link';
import FormService from '../../modules/Form';
import router from '../../services/router';
import getFormDataValue from '../../utils/getFormDataValue';
import AuthController from '../../controllers/auth/auth.controller';
import {Valid} from '../../utils/constants/valid';

export default class Login extends Block {
	constructor() {
		const components = {
			authForm: new AuthForm({
				enterFields: authFormData,
				events: {
					focusout: (event:Event) => {
						event.preventDefault();
						FormService.inputEventHandler(event);
					},
					focusin: (event:Event) => {
						event.preventDefault();
						FormService.inputEventHandler(event);
					},
					submit: async (event:Event) => {
						event.preventDefault();
						const form = event.target as HTMLFormElement;
						const formData = new FormData(form);
						try {
							await AuthController.signIn(getFormDataValue(formData));
						} catch (error) {
							if (error.message === Valid.noValid) {
								FormService.showNoValidField(event);
							}
						}
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

