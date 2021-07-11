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
import FormService from '../../modules/Form';
import {Valid} from '../../utils/constants/valid';

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
					try {
						ChatController.createChat(getFormDataValue(formData));
					} catch (error) {
						if (error === Valid.noValid) {
							FormService.checkValidating(event);
						}
					}

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
				chatItems: () => get(Store.getState(), 'chats'),
				events: {},
			}),
			modal,
		};
		super('div', {...props, components});
	}

	render(): Function {
		return Handlebars.compile(asideTmpl);
	}
}
