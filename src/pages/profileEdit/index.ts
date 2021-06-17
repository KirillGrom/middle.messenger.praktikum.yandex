import profileEditTmpl from './profileEdit.tmpl';
import profileEditData from '../../components/profileEdit/profileEdit.data';
import {renderInDOM} from '../../utils/renderInDOM';
import Block from '../../modules/Block';
import Profile from '../../components/profile';
import parseTmpl from '../../utils/parseTmpl';
import {pageEnum, PageType} from '../../types/page.type';

export default class ProfileEditPage extends Block {
	constructor(props:PageType) {
		super(profileEditTmpl, props);
	}

	render(): string {
		this.components = {
			profile: new Profile({
				href: 'index.html',
				imgSrc: '',
				name: 'Вася',
				inputList: profileEditData,
				isEdit: true,
			}),
		};
		this.source = parseTmpl.call(this);
		const ctx = this._compile();
		return ctx(this.props);
	}
}

renderInDOM(document.querySelector('#app'), new ProfileEditPage({type: pageEnum.profile}).render());
