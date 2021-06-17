import registrationTmpl from './registration.tmpl';
import {renderInDOM} from '../../utils/renderInDOM';
import Block from '../../modules/Block';
import RegisterForm from '../../components/registerForm';
import registerFormData from '../../components/registerForm/registerForm.data';
import parseTmpl from '../../utils/parseTmpl';
import {pageEnum, PageType} from '../../types/page.type';

export default class Registration extends Block {
	constructor(props: PageType) {
		super(registrationTmpl, props);
	}

	render(): string {
		this.components = {
			registerForm: new RegisterForm({
				enterFields: registerFormData,
			}),
		};
		this.source = parseTmpl.call(this);
		const ctx = this._compile();
		return ctx(this.props);
	}
}

renderInDOM(document.querySelector('#app'), new Registration({type: pageEnum.enter}).render());
