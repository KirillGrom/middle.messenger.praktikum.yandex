import LinkTmpl from './link.tmpl';
import Block from '../../modules/Block';
import {LinkType} from './link.type';

export default class Link extends Block {
	constructor(props:LinkType) {
		super('a', props);
	}

	render():HTMLElement {
		return this._compile(LinkTmpl)(this.props);
	}
}
