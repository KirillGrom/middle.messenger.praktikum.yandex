import ChatListTmpl from './chatList.tmpl';
import Block from '../../modules/Block';
import ChatItem from '../chatItem';
import {ChatListType} from './chatList.type';

export default class ChatList extends Block {
	constructor(props:ChatListType) {
		const components = {
			chatItems: props.chatItems.map(prop => new ChatItem(prop)),
		};
		super('div', {...props, components});
	}

	render():HTMLElement {
		return this._compile(ChatListTmpl)({
			components: {
				chatItems: this.props.components.chatItems.map((item: { getContent: () => HTMLElement; }) => item.getContent()),
			},
		});
	}
}
