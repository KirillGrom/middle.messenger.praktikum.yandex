
import MessagesTmpl from './messages.tmpl';
import Block from '../../modules/Block';
import Message from '../message';
import parseTmpl from '../../utils/parseTmpl';
import {MessagesType} from './messages.type';

export default class Messages extends Block {
	constructor(props: MessagesType) {
		super(MessagesTmpl, props);
	}

	render(): string {
		this.components = {
			message: this.props.messages.reduce((acc, data) => {
				const date = new Message({
					isDataTime: true,
					time: data.date,
					class: 'message-item__date-time',
				});
				return [...acc, date, ...data.messages.map(({text, time, type}) => new Message({message: text, time, class: type === 'person' ? 'message-item--person' : 'message-item--my'}))];
			}, []),
		};
		this.source = parseTmpl.call(this);
		const ctx = this._compile();
		return ctx(this.props);
	}
}

