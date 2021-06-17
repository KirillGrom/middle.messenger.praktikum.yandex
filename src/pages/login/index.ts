import loginTmpl from './login.tmpl';
import {renderInDOM} from '../../utils/renderInDOM';
import AuthForm from '../../components/authForm';
import authFormData from '../../components/authForm/authForm.data';
import Block from '../../modules/Block';
import parseTmpl from '../../utils/parseTmpl';
import {pageEnum, PageType} from '../../types/page.type';

export default class Index extends Block {
	constructor(props:PageType) {
		super(loginTmpl, props);
	}

	render():string {
		this.components = {
			authForm: new AuthForm({
				enterFields: authFormData,
			}),
		};
		this.source = parseTmpl.call(this);
		const ctx = this._compile();
		return ctx(this.props);
	}
}

renderInDOM(document.querySelector('#app'), new Index({type: pageEnum.enter}).render());
