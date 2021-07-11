import Handlebars from 'handlebars';
import MessagesTmpl from './messages.tmpl';
import Block from '../../modules/Block';
import Message from '../message';
import {MessagesType} from './messages.type';
import Store from '../../modules/Store';
import get from '../../utils/get';
import dateFormat from '../../utils/dateFormat';
import {EVENTS} from '../../modules/Store/events';

export default class Messages extends Block {
	constructor(props: MessagesType) {
		const components = {
			messages: () => get(Store.getState(), 'message').map(data => {
				const currentUser = get(Store.getState(), 'user');
				const isCurrentUser = currentUser.id === data.user_id;
				const messages = new Message({
					message: data.content,
					time: dateFormat(data.time),
					type: isCurrentUser ? 'my' : 'person',
				});

				return messages;
			}),
		};
		super('div', {...props, components});
	}

	componentDidMount() {
		Store.eventBus.on(EVENTS.FLOW_SDU, this.setProps.bind(this, this.props));
	}

	render(): Function {
		return Handlebars.compile(MessagesTmpl);
	}
}

