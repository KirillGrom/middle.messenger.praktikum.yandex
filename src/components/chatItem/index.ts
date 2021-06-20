import ChatItemTmpl from './chatItem.tmpl';
import Block from '../../modules/Block';
import Avatar from '../avatar';
import {chatItemType} from './chatItem.type';

export default class ChatItem extends Block {
	constructor(props:chatItemType) {
		const components = {
			avatar: new Avatar({
				imgSrc: props.imgSrc,
				class: ['avatar'],
			}),
		};
		super('li', {...props, components});
	}

	render():HTMLElement {
		return this._compile(ChatItemTmpl)({
			...this.props,
			components: {
				avatar: this.props.components.avatar.getContent(),
			},
		});
	}
}
