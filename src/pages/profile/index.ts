import {renderInDOM} from '../../utils/renderInDOM';
import Block from '../../modules/Block';
import Profile from '../../components/profile';
import ProfileBlockData from '../../components/profileBlock/profileBlock.data';
import profileTmpl from './profile.tmpl';
import {BlockType} from '../../types/block.type';

export class ProfilePage extends Block {
	constructor(props:BlockType) {
		const components = {
			profile: new Profile({
				href: 'index.html',
				imgSrc: '',
				name: 'Вася',
				inputList: ProfileBlockData,
				isEdit: false,
				class: ['profile'],
			}),
		};
		super('div', {...props, components});
	}

	render(): HTMLElement {
		return this._compile(profileTmpl)({
			...this.props,
			components: {
				profile: this.props.components.profile.getContent(),
			},
		});
	}
}

renderInDOM(document.querySelector('#app'), new ProfilePage({class: ['wrapper']}).getContent());
