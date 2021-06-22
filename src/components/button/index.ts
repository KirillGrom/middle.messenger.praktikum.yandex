// @ts-ignore
import Handlebars from 'handlebars';
import Block from '../../modules/Block';
import buttonTmpl from './button.tmpl';
import {ButtonType} from './button.type';

export default class Button extends Block {
	constructor(props: ButtonType) {
		super('div', props);
	}

	render(): Function {
		return Handlebars.compile(buttonTmpl);
	}
}
