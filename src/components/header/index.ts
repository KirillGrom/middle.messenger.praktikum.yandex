import Block from '../../modules/Block';
import headerTmpl from './header.tmpl';
import Avatar from '../avatar';
import parseTmpl from '../../utils/parseTmpl';
import {HeaderType} from './header.type';

export default class Header extends Block {
	constructor(prop:HeaderType) {
		super(headerTmpl, prop);
	}

	render():string {
		this.components = {
			avatar: new Avatar({
				class: 'header__avatar',
				imgSrc: this.props.imgSrc,
			}),
		};
		this.source = parseTmpl.call(this);
		const ctx = this._compile();
		return ctx(this.props);
	}
}
