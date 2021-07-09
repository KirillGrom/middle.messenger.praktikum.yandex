// @ts-ignore
import Handlebars from 'handlebars';
import Block from '../../modules/Block';
import indexTmpl from './index.tmpl';
import Aside from '../../components/aside';
import Main from '../../components/main';
import AuthController from '../../controllers/auth/auth.controller';
import ChatController from '../../controllers/chat/chat.controller';

const authController = new AuthController();
const chatController = new ChatController();

export default class Index extends Block {
	constructor() {
		authController.user();
		chatController.chats({offset: 0, limit: 10, title: ''});
		const components = {
			aside: new Aside({}),
			main: new Main({
				isEmpty: true,
				contentHeader: '',
				contentMain: '',
				contentFooter: ''}),
		};
		super('div', {components});
	}

	render(): Function {
		return Handlebars.compile(indexTmpl);
	}
}

