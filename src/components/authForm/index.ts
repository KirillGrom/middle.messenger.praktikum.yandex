import AuthFormTmpl from './authForm.tmpl';
import Block from '../../modules/Block';
import parseTmpl from '../../utils/parseTmpl';
import EnterField from '../enterField';
import Link from '../link';
import {authFormType} from './authForm.type';
import {FieldType} from '../../types/field.type';

export default class AuthForm extends Block {
	props: authFormType;
	constructor(props: authFormType) {
		super(AuthFormTmpl, props);
	}

	render(): string {
		this.components = {
			enterField: this.props.enterFields.map((field:FieldType) => new EnterField({...field, errorText: 'Введите корректный логин или пароль'})),
			link: new Link({
				href: '/registration.html',
				class: 'link--blue enter-form__link',
				linkName: 'Нет аккаунта?',
			}),
		};
		this.source = parseTmpl.call(this);
		const ctx = this._compile();
		return ctx(this.props);
	}
}
