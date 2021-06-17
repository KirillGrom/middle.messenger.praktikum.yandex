import passwordTmpl from './password.tmpl';
import passwordEditData from '../../components/passwordEdit/passwordEdit.data';
import {renderInDOM} from '../../utils/renderInDOM';
import Block from '../../modules/Block';
import Profile from '../../components/profile';
import parseTmpl from '../../utils/parseTmpl';
import {pageEnum, PageType} from '../../types/page.type';

export default class Password extends Block {
	constructor(props :PageType) {
		super(passwordTmpl, props);
	}

	render(): string {
		this.components = {
			profile: new Profile({
				imgSrc: 'https://funik.ru/wp-content/uploads/2019/03/e8d23166dec0ffd2ad18.jpg',
				href: 'index.html',
				inputList: passwordEditData,
				isEdit: true,
			}),
		};
		this.source = parseTmpl.call(this);
		const ctx = this._compile();
		return ctx(this.props);
	}
}

renderInDOM(document.querySelector('#app'), new Password({type: pageEnum.profile}).render());
