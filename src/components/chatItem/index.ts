import Handlebars from 'handlebars';
import ChatItemTmpl from './chatItem.tmpl';
import Block from '../../modules/Block';
import Avatar from '../avatar';
import {ChatItemType} from './chatItem.type';

export default class ChatItem extends Block {
	constructor(props: ChatItemType) {
		const components = {
			avatar: new Avatar({
				imgSrc: props.imgSrc,
			}),
		};
		super('li', {...props, components});
	}

	render(): Function {
		return Handlebars.compile(ChatItemTmpl);
	}
}
