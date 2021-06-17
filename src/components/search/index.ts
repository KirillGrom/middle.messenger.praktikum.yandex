
import SearchTmpl from './search.tmpl';
import Block from '../../modules/Block';
import {SearchType} from './search.type';

export default class Search extends Block {
	constructor(props:SearchType) {
		super(SearchTmpl, props);
	}
}
