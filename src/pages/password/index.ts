import passwordTmpl from './password.tmpl';
import {renderInDOM} from '../../utils/renderInDOM';
import Block from '../../modules/Block';
import Profile from '../../components/profile';
import {BlockType} from '../../types/block.type';

export default class Password extends Block {
	constructor(props :BlockType) {
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
				class: ['profile'],
			}),
		};
		super('div', {...props, components});
	}

	render(): HTMLElement {
		return this._compile(passwordTmpl)({
			...this.props,
			components: {
				profile: this.props.components.profile.getContent(),
			},
		});
	}
}

renderInDOM(document.querySelector('#app'), new Password({class: ['wrapper']}).getContent());
