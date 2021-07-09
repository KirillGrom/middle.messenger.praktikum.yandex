// @ts-ignore
import Handlebars from 'handlebars';
import Block from '../../modules/Block';
import createButtonChatTmpl from './createButtonChat.tmpl';
import {CreateButtonChatType} from './createButtonChat.type';

export default class CreateButtonChat extends Block {
	constructor(props: CreateButtonChatType) {
		super('button', props);
	}

	render(): Function {
		return Handlebars.compile(createButtonChatTmpl);
	}
}
