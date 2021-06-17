
import LinkTmpl from './link.tmpl';
import Block from '../../modules/Block';
import {LinkType} from './link.type';

export default class Link extends Block {
	constructor(props:LinkType) {
		super(LinkTmpl, props);
	}

	render() {
		const ctx = this._compile();
		return ctx(this.props);
	}
}
