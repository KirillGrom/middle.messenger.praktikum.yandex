import Handlebars from 'handlebars';
import Block from '../../modules/Block';
import indexTmpl from './chat.tmpl';
import Aside from '../../components/aside';
import Main from '../../components/main';
import AuthController from '../../controllers/auth/auth.controller';
import ChatController from '../../controllers/chat/chat.controller';

export default class Chat extends Block {
	constructor() {
		try {
			AuthController.user();
			ChatController.chats({offset: 0, limit: 10, title: ''});
		} catch (error) {
		}

		const components = {
			aside: new Aside({}),
			main: new Main({
				isEmpty: false,
			}),
		};
		super('div', {components});
	}

	render(): Function {
		return Handlebars.compile(indexTmpl);
	}
}
