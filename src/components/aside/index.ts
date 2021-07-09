// @ts-ignore
import Handlebars from 'handlebars';
import asideTmpl from './aside.tmpl';
import Block from '../../modules/Block';
import Link from '../link';
import Search from '../search';
import ChatList from '../chatList';
import router from '../../services/router';
import CreateButtonChat from '../createButtonChat';
import Modal from '../modal';
import ChatController from '../../controllers/chat/chat.controller';
import getFormDataValue from '../../utils/getFormDataValue';
import Store from '../../modules/Store';
import get from '../../utils/get';

const storeInstance = new Store();
const chatController = new ChatController();

export default class Aside extends Block {
	constructor(props: any) {
		const modal = new Modal({
			title: 'Создать чат',
			btnText: 'Создать',
			typeInput: {
				label: '',
				name: 'title',
				type: 'text',
				value: '',
			},
			events: {
				submit: (event: Event) => {
					event.preventDefault();
					const form = event.target as HTMLFormElement;
					const formData = new FormData(form);
					chatController.createChat(getFormDataValue(formData));
					modal.hide();
				},
			},
		});
		modal.hide();
		const components = {
			link: new Link({
				linkName: 'Профиль',
				events: {
					click: (event: Event) => {
						event.preventDefault();
						router.go('/profile');
					},
				},
			}),
			search: new Search({text: 'Поиск'}),
			createButtonChat: new CreateButtonChat({
				events: {
					click: (event: Event) => {
						event.preventDefault();
						modal.show();
					},
				},
			}),
			chatList: new ChatList({
				chatItems: () => get(storeInstance.getState(), 'chats'),
				events: {},
			}, storeInstance),
			modal,
		};
		super('div', {...props, components});
	}

	render(): Function {
		return Handlebars.compile(asideTmpl);
	}
}
