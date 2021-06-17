import enterFieldTmpl from './enterField.tmpl';
import Block from '../../modules/Block';
import {FieldType} from '../../types/field.type';

export default class EnterField extends Block {
	constructor(props:FieldType) {
		super(enterFieldTmpl, props);
	}

	render(): string {
		const ctx = this._compile();
		return ctx(this.props);
	}
}
