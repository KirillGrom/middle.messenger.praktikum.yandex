import MainTmpl from './main.tmpl';
import Block from '../../modules/Block';
import {MainType} from './main.type';
import Header from '../header';
import parseTmpl from '../../utils/parseTmpl';
import Footer from '../footer';
import Messages from '../messages';
import MessagesData from '../messages/messages.data';

export default class Main extends Block {
	constructor(props:MainType) {
		super(MainTmpl, props);
	}

	render() {
		this.components = {
			header: new Header({
				name: 'Вадим',
				imgSrc: '',
			}),
			footer: new Footer(),
			chatMessages: new Messages({
				messages: MessagesData,
			}),
		};

		this.source = parseTmpl.call(this);
		const template = this._compile();
		return template(this.props);
	}
}
