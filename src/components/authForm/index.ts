import Handlebars from 'handlebars';
import AuthFormTmpl from './authForm.tmpl';
import Block from '../../modules/Block';
import EnterField from '../enterField';
import {authFormType} from './authForm.type';
import {FieldType} from '../../types/field.type';

export default class AuthForm extends Block {
	constructor(props: authFormType) {
		const components = {
			enterField: props.enterFields.map((field:FieldType) => new EnterField({...field, errorText: 'Введите корректный логин или пароль'})),
		};
		super('form', {...props, components});
	}

	render(): Function {
		return Handlebars.compile(AuthFormTmpl);
	}
}
