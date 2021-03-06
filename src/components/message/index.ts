import Handlebars from 'handlebars';
import MessageTmpl from './message.tmpl';
import Block from '../../modules/Block';
import {MessageType} from './message.type';

export default class Message extends Block {
	constructor(props: MessageType) {
		super('li', props);
	}

	render(): Function {
		return Handlebars.compile(MessageTmpl);
	}
}

