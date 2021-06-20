import enterFieldTmpl from './enterField.tmpl';
import Block from '../../modules/Block';
import {FieldType} from '../../types/field.type';

export default class EnterField extends Block {
	constructor(props:FieldType) {
		super('div', props);
	}

	render():HTMLElement {
		return this._compile(enterFieldTmpl)(this.props);
	}
}
