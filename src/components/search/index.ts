// @ts-ignore
import Handlebars from 'handlebars';
import SearchTmpl from './search.tmpl';
import Block from '../../modules/Block';
import {SearchType} from './search.type';

export default class Search extends Block {
	constructor(props:SearchType) {
		super('div', props);
	}

	render(): Function {
		return Handlebars.compile(SearchTmpl);
	}
}
