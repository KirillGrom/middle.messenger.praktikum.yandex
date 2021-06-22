// @ts-ignore
import Handlebars from 'handlebars';
import enterFieldTmpl from './enterField.tmpl';
import Block from '../../modules/Block';
import {FieldType} from '../../types/field.type';

export default class EnterField extends Block {
	constructor(props: FieldType) {
		super('div', props);
	}

	render(): Function {
		return Handlebars.compile(enterFieldTmpl);
	}
}
