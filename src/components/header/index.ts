import Block from '../../modules/Block';
import headerTmpl from './header.tmpl';
import Avatar from '../avatar';
import {HeaderType} from './header.type';

export default class Header extends Block {
	constructor(props:HeaderType) {
		const components = {
			avatar: new Avatar({
				imgSrc: props.imgSrc,
				class: ['avatar', 'header__avatar'],
			}),
		};
		super('header', {...props, components});
	}

	render() {
		return this._compile(headerTmpl)({
			...this.props,
			components: {
				avatar: this.props.components.avatar.getContent(),
			},
		});
	}
}
