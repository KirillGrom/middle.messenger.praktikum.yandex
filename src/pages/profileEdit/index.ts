import {renderInDOM} from '../../utils/renderInDOM';
import Block from '../../modules/Block';
import Profile from '../../components/profile';
import ProfileEditData from '../../components/profileEdit/profileEdit.data';
import profileTmpl from './profileEdit.tmpl';
import {BlockType} from '../../types/block.type';

export class ProfileEditPage extends Block {
	constructor(props:BlockType) {
		const components = {
			profile: new Profile({
				href: 'index.html',
				imgSrc: '',
				name: 'Вася',
				inputList: ProfileEditData,
				isEdit: true,
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

renderInDOM(document.querySelector('#app'), new ProfileEditPage({class: ['wrapper']}).getContent());
