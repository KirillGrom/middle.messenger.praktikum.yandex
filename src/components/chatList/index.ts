// @ts-ignore
import Handlebars from 'handlebars';
import ChatListTmpl from './chatList.tmpl';
import Block from '../../modules/Block';
import ChatItem from '../chatItem';
import {ChatListType} from './chatList.type';

export default class ChatList extends Block {
	constructor(props: ChatListType) {
		const components = {
			chatItems: props.chatItems.map(prop => new ChatItem(prop)),
		};
		super('div', {...props, components});
	}

	render(): Function {
		return Handlebars.compile(ChatListTmpl);
	}
}
