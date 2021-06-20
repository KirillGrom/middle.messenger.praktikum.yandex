import MainTmpl from './main.tmpl';
import Block from '../../modules/Block';
import {MainType} from './main.type';
import Header from '../header';
import Footer from '../footer';
import Messages from '../messages';
import MessagesData from '../messages/messages.data';

export default class Main extends Block {
	constructor(props:MainType) {
		const components = {
			header: new Header({
				class: ['header', 'main__header'],
				imgSrc: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
				name: 'Вадим',
			}),
			chatMessages: new Messages({
				messages: MessagesData,
				class: ['messages-wrapper'],
			}),
			footer: new Footer({
				class: ['footer', 'main__footer'],
			}),
		};
		super('main', {...props, components});
	}

	render(): HTMLElement {
		return this._compile(MainTmpl)({
			...this.props,
			components: {
				header: this.props.components.header.getContent(),
				footer: this.props.components.footer.getContent(),
				chatMessages: this.props.components.chatMessages.getContent(),
			},
		});
	}
}
