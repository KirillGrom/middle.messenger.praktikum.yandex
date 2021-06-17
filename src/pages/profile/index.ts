import {renderInDOM} from '../../utils/renderInDOM';
import Block from '../../modules/Block';
import Profile from '../../components/profile';
import ProfileBlockData from '../../components/profileBlock/profileBlock.data';
import parseTmpl from '../../utils/parseTmpl';
import profileTmpl from './profile.tmpl';
import {pageEnum, PageType} from '../../types/page.type';

export class ProfilePage extends Block {
	constructor(props:PageType) {
		super(profileTmpl, props);
	}

	render(): string {
		this.components = {
			profile: new Profile({
				href: 'index.html',
				imgSrc: '',
				name: 'Вася',
				inputList: ProfileBlockData,
				isEdit: false,
			}),
		};

		this.source = parseTmpl.call(this);
		const ctx = this._compile();
		return ctx(this.props);
	}
}

renderInDOM(document.querySelector('#app'), new ProfilePage({type: pageEnum.profile}).render());
