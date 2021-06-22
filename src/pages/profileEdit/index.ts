// @ts-ignore
import Handlebars from 'handlebars';
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
			}),
		};
		super('div', {...props, components});
	}

	render(): Function {
		return Handlebars.compile(profileTmpl);
	}
}

renderInDOM(document.querySelector('#app'), new ProfileEditPage({}).getContent());
