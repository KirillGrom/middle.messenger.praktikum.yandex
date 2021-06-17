import Block from '../../modules/Block';
import buttonTmpl from './button.tmpl';
import {ButtonType} from './button.type';

export default class Button extends Block {
	props:ButtonType
	constructor(props:ButtonType) {
		super(buttonTmpl, props);
	}

	render(): string {
		const ctx = this._compile();
		return ctx(this.props);
	}
}
