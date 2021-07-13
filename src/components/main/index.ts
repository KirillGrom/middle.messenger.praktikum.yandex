import Handlebars from 'handlebars';
import MainTmpl from './main.tmpl';
import Block from '../../modules/Block';
import {MainType} from './main.type';
import Header from '../header';
import Footer from '../footer';
import Messages from '../messages';
import MessagesData from '../messages/messages.data';
import Store from '../../modules/Store';
import {EVENTS} from '../../modules/Store/events';
import get from '../../utils/get';
export default class Main extends Block {
	constructor(props: MainType) {
		const components = {
			header: new Header({
				name: () => get(Store.getState(), 'currentChat.name'),
				imgSrc: () => get(Store.getState(), 'currentChat.imgSrc'),
			}),
			chatMessages: new Messages({
				messages: MessagesData,
			}),
			footer: new Footer({}),
		};
		super('div', {...props, components});
	}

	componentDidMount() {
		Store.eventBus.on(EVENTS.FLOW_SDU, this.setProps.bind(this, this.props));
	}

	render(): Function {
		return Handlebars.compile(MainTmpl);
	}
}
