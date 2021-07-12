import Handlebars from 'handlebars';
import MainTmpl from './main.tmpl';
import Block from '../../modules/Block';
import {MainType} from './main.type';
import Header from '../header';
import Footer from '../footer';
import Messages from '../messages';
import MessagesData from '../messages/messages.data';

export default class Main extends Block {
	constructor(props: MainType) {
		const name: string = '';
		const components = {
			header: new Header({
				imgSrc: 'https:images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
				name,
			}),
			chatMessages: new Messages({
				messages: MessagesData,
			}),
			footer: new Footer({}),
		};
		super('div', {...props, components});
	}

	render(): Function {
		return Handlebars.compile(MainTmpl);
	}
}
