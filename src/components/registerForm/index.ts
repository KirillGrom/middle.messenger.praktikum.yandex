import registerFormTmpl from './registerForm.tmpl';
import Block from '../../modules/Block';
import EnterField from '../enterField';
import {RegisterFormType} from './registerForm.type';

export default class RegisterForm extends Block {
	constructor(props:RegisterFormType) {
		const components = {
			enterField: props.enterFields.map(field => new EnterField({...field})),
		};
		super('form', {...props, components});
	}

	render(): HTMLElement {
		return this._compile(registerFormTmpl)({
			...this.props,
			components: {
				enterField: this.props.components.enterField.map((field: { getContent: () => HTMLElement; }) => field.getContent()),
			},

		});
	}
}
