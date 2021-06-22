// @ts-ignore
import Handlebars from 'handlebars';
import Block from '../../modules/Block';
import headerTmpl from './header.tmpl';
import Avatar from '../avatar';
import {HeaderType} from './header.type';

export default class Header extends Block {
	constructor(props: HeaderType) {
		const components = {
			avatar: new Avatar({
				imgSrc: props.imgSrc,
			}),
		};
		super('div', {...props, components});
	}

	render() {
		return Handlebars.compile(headerTmpl);
	}
}
