import Handlebars from 'handlebars';
import Block from '../../modules/Block';
import headerTmpl from './header.tmpl';
import Avatar from '../avatar';
import {HeaderType} from './header.type';
import Store from '../../modules/Store';
import HeaderButtons from '../headerButtons';
import Modal from '../modal';
import FormService from '../../modules/Form';
import ChatController from '../../controllers/chat/chat.controller';
import getFormDataValue from '../../utils/getFormDataValue';
import {Valid} from '../../utils/constants/valid';
import {EVENTS} from '../../modules/Store/events';

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
				submit: async (event: Event) => {
					const form = event.target as HTMLFormElement;
					const formData = new FormData(form);
					try {
						await ChatController.addUsers(getFormDataValue(formData));
					} catch (error) {
						if (error.message === Valid.noValid) {
							FormService.showNoValidField(event);
						}
					}

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
				submit: async (event: Event) => {
					const form = event.target as HTMLFormElement;
					const formData = new FormData(form);
					try {
						await ChatController.deleteUsers(getFormDataValue(formData));
					} catch (error) {
						if (error === Valid.noValid) {
							FormService.showNoValidField(event);
						}
					}

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
		super('div', {...props, components});
	}

	componentDidMount() {
		Store.eventBus.on(EVENTS.FLOW_SDU, this.setProps.bind(this, this.props));
	}

	render(): Function {
		return Handlebars.compile(headerTmpl);
	}
}
