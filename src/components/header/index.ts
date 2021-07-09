// @ts-ignore
import Handlebars from 'handlebars';
import Block from '../../modules/Block';
import headerTmpl from './header.tmpl';
import Avatar from '../avatar';
import {HeaderType} from './header.type';
import Store from '../../modules/Store';
import HeaderButtons from '../headerButtons';
import Modal from '../modal';
import Form from '../../modules/form';
import ChatController from '../../controllers/chat/chat.controller';
import getFormDataValue from '../../utils/getFormDataValue';

const storeInstance = new Store();
const formService = new Form();
const chatController = new ChatController();
// GromDilara
export default class Header extends Block {
	constructor(props: HeaderType) {
		const modalAddUser = new Modal({
			title: 'Добавить пользователя',
			btnText: 'Добавить',
			typeInput: {
				type: 'text',
				value: '',
				label: '',
				name: 'login',
			},
			events: {
				submit: (event: Event) => {
					formService.submit(event);
					const form = event.target as HTMLFormElement;
					const formData = new FormData(form);
					chatController.addUsers(getFormDataValue(formData));
					modalAddUser.hide();
				},
			},
		});
		const modalRemoveUser = new Modal({
			title: 'Удалить пользователя',
			btnText: 'Удалить',
			typeInput: {
				type: 'text',
				value: '',
				label: '',
				name: 'login',
			},
			events: {
				submit: (event: Event) => {
					formService.submit(event);
					const form = event.target as HTMLFormElement;
					const formData = new FormData(form);
					chatController.deleteUsers(getFormDataValue(formData));
					modalRemoveUser.hide();
				},
			},
		});
		modalAddUser.hide();
		modalRemoveUser.hide();
		const components = {
			avatar: new Avatar({
				imgSrc: props.imgSrc,
			}),
			buttonAdd: new HeaderButtons({
				buttonText: 'Добавить пользователя',
				addButton: true,
				events: {
					click: (event: Event) => {
						event.preventDefault();
						modalAddUser.show();
					},
				},
			}),
			buttonRemove: new HeaderButtons({
				buttonText: 'Удалить пользователя',
				deleteButton: true,
				events: {
					click: (event: Event) => {
						event.preventDefault();
						modalRemoveUser.show();
					},
				},
			}),
			buttonRemoveChat: new HeaderButtons({
				buttonText: 'Удалить чат',
				deleteButton: true,
			}),
			modalAddUser,
			modalRemoveUser,
		};
		super('div', {...props, components}, storeInstance);
	}

	render(): Function {
		return Handlebars.compile(headerTmpl);
	}
}
