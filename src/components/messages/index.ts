import MessagesTmpl from './messages.tmpl';
import Block from '../../modules/Block';
import Message from '../message';
import {MessagesType} from './messages.type';

export default class Messages extends Block {
	constructor(props: MessagesType) {
		const components = {
			messages: props.messages.reduce((acc, data) => {
				const date = new Message({
					isDataTime: true,
					time: data.date,
					class: ['message-item', 'message-item__date-time'],
				});
				const messages = data.messages.map(({text, time, type}) => new Message({
					message: text,
					time,
					class: ['message-item', type === 'person' ? 'message-item--person' : 'message-item--my'],
				}));

				return [...acc, date, ...messages];
			}, []),
		};
		super('div', {...props, components});
	}

	render(): HTMLElement {
		return this._compile(MessagesTmpl)({
			...this.props,
			components: {
				messages: this.props.components.messages.map((msg: { getContent: () => HTMLElement; }) => msg.getContent()),
			},
		});
	}
}

