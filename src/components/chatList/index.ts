// @ts-ignore
import Handlebars from 'handlebars';
import ChatListTmpl from './chatList.tmpl';
import Block from '../../modules/Block';
import ChatItem from '../chatItem';
import {ChatListType} from './chatList.type';
import Store from '../../modules/Store';
import ChatController from '../../controllers/chat/chat.controller';

const chatController = new ChatController();

export default class ChatList extends Block {
	constructor(props: ChatListType, store: Store) {
		const components = {
			chatItems: () => props.chatItems().map(prop => new ChatItem({...prop, events: {
				click: (event: Event) => {
					event.preventDefault();
					chatController.chatItemHandler(prop.id);
				},
			}})),
		};
		super('div', {...props, components}, store);
	}

	render(): Function {
		return Handlebars.compile(ChatListTmpl);
	}
}
