import Handlebars from 'handlebars';
import registrationTmpl from './registration.tmpl';
import Block from '../../modules/Block';
import RegisterForm from '../../components/registerForm';
import registerFormData from '../../components/registerForm/registerForm.data';
import Link from '../../components/link';
import router from '../../services/router';
import AuthController from '../../controllers/auth/auth.controller';
import getFormDataValue from '../../utils/getFormDataValue';
import FormService from '../../modules/Form';
import {Valid} from '../../utils/constants/valid';

export default class Registration extends Block {
	constructor() {
		const components = {
			registerForm: new RegisterForm({
				enterFields: registerFormData,
				events: {
					focusout: (event:Event) => {
						FormService.inputEventHandler(event);
					},
					focusin: (event:Event) => {
						FormService.inputEventHandler(event);
					},
					submit: async (event:Event) => {
						event.preventDefault();
						const form = event.target as HTMLFormElement;
						const formData = new FormData(form);
						try {
							await AuthController.signUp(getFormDataValue(formData));
						} catch (error) {
							if (error.message === Valid.noValid) {
								FormService.showNoValidField(event);
							}
						}
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

