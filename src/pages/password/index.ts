// @ts-ignore
import Handlebars from 'handlebars';
import passwordTmpl from './password.tmpl';
import Block from '../../modules/Block';
import Profile from '../../components/profile';
import {typeEdit} from '../../components/profile/profile.type';

export default class Password extends Block {
	constructor() {
		const components = {
			profile: new Profile({
				typeEdit: typeEdit.password,
				inputList: [
					{
						label: 'Старый пароль',
						type: 'password',
						value: '',
						name: 'oldPassword',
					},
					{
						label: 'Новый пароль',
						type: 'password',
						value: '',
						name: 'newPassword',
					},
				],
				isEdit: true,
			}),
		};
		super('div', {components});
	}

	render(): Function {
		return Handlebars.compile(passwordTmpl);
	}
}

