import registerFormTmpl from './registerForm.tmpl';
import Block from '../../modules/Block';
import Link from '../link';
import parseTmpl from '../../utils/parseTmpl';
import EnterField from '../enterField';
import {RegisterFormType} from './registerForm.type';

export default class RegisterForm extends Block {
	props:RegisterFormType
	constructor(props:RegisterFormType) {
		super(registerFormTmpl, props);
	}

	render(): string {
		this.components = {
			enterField: this.props.enterFields.map(field => new EnterField({...field})),
			link: new Link({
				href: '/login.html',
				class: 'link--blue enter-form__link',
				linkName: 'Войти',
			}),
		};
		this.source = parseTmpl.call(this);
		const ctx = this._compile();
		return ctx(this.props);
	}
}
