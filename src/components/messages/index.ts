// @ts-ignore
import Handlebars from 'handlebars';
import MessagesTmpl from './messages.tmpl';
import Block from '../../modules/Block';
import Message from '../message';
import {MessagesType} from './messages.type';
import Store from '../../modules/Store';
import get from '../../utils/get';
import dateFormat from '../../utils/dateFormat';

const storeInstance = new Store();

export default class Messages extends Block {
	constructor(props: MessagesType) {
		const components = {
			messages: () => get(storeInstance.getState(), 'message').map(data => {
				const messages = new Message({
					message: data.content,
					time: dateFormat(data.time),
					type: get(storeInstance.getState(), 'user').id === data.user_id ? 'my' : 'person',
				});

				return messages;
			}),
		};
		super('div', {...props, components}, storeInstance);
	}

	render(): Function {
		return Handlebars.compile(MessagesTmpl);
	}
}

