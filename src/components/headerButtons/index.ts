// @ts-ignore
import Handlebars from 'handlebars';
import Block from '../../modules/Block';
import {HeaderButtonsType} from './headerButtons.type';
import HeaderButtonsTmpl from './headerButtons.tmpl';

export default class HeaderButtons extends Block {
	constructor(props: HeaderButtonsType) {
		super('div', props);
	}

	render(): Function {
		return Handlebars.compile(HeaderButtonsTmpl);
	}
}
