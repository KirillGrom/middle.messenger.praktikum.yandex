// @ts-ignore
import Handlebars from 'handlebars';
import passwordTmpl from './password.tmpl';
import {renderInDOM} from '../../utils/renderInDOM';
import Block from '../../modules/Block';
import Profile from '../../components/profile';
import {BlockType} from '../../types/block.type';

export default class Password extends Block {
	constructor(props: BlockType) {
		const components = {
			profile: new Profile({
				imgSrc: 'https://funik.ru/wp-content/uploads/2019/03/e8d23166dec0ffd2ad18.jpg',
				href: 'index.html',
				inputList: [
					{
						label: 'Старый пароль',
						type: 'password',
						value: 'qwert1',
						name: 'old_password',
					},
					{
						label: 'Новый пароль',
						type: 'password',
						value: '',
						name: 'password',
					},
					{
						label: 'Повторите',
						type: 'password',
						value: '',
						name: 'password_confirm',
					},
				],
				isEdit: true,
			}),
		};
		super('div', {...props, components});
	}

	render(): Function {
		return Handlebars.compile(passwordTmpl);
	}
}

renderInDOM(document.querySelector('#app'), new Password({}).getContent());
