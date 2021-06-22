// @ts-ignore
import Handlebars from 'handlebars';
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
				});
				const messages = data.messages.map(({text, time, type}) => new Message({
					message: text,
					time,
					type,
				}));

				return [...acc, date, ...messages];
			}, []),
		};
		super('div', {...props, components});
	}

	render(): Function {
		return Handlebars.compile(MessagesTmpl);
	}
}

