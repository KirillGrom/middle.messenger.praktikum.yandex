// @ts-ignore
import Handlebars from 'handlebars';
import LinkTmpl from './link.tmpl';
import Block from '../../modules/Block';
import {LinkType} from './link.type';

export default class Link extends Block {
	constructor(props: LinkType) {
		super('div', props);
	}

	render(): Function {
		return Handlebars.compile(LinkTmpl);
	}
}
