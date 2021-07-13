import Handlebars from 'handlebars';
import ChatListTmpl from './chatList.tmpl';
import Block from '../../modules/Block';
import ChatItem from '../chatItem';
import {ChatListType} from './chatList.type';
import Store from '../../modules/Store';
import ChatController from '../../controllers/chat/chat.controller';
import {EVENTS} from '../../modules/Store/events';

export default class ChatList extends Block {
	constructor(props: ChatListType) {
		const components = {
			chatItems: () => props.chatItems().map(prop => new ChatItem({...prop, events: {
				click: (event: Event) => {
					event.preventDefault();
					try {
						ChatController.chatItemHandler(prop);
					} catch (error) {}
				},
			}})),
		};
		super('div', {...props, components});
	}

	componentDidMount() {
		Store.eventBus.on(EVENTS.FLOW_SDU, this.setProps.bind(this, this.props));
	}

	render(): Function {
		return Handlebars.compile(ChatListTmpl);
	}
}
