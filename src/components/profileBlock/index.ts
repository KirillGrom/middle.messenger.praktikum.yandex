// @ts-ignore
import Handlebars from 'handlebars';
import ProfileBlockTmpl from './profileBlock.tmpl';
import Block from '../../modules/Block';
import {ProfileBlockType} from './profileBlock.type';
import ProfileBlockItem from '../profileBlockItem';
import Link from '../link';
import router from '../../services/router';
import AuthController from '../../controllers/auth/auth.controller';
import get from '../../utils/get';
import Store from '../../modules/Store';
import ButtonAvatar from '../buttonAvatar';
import Modal from '../modal';
import UserController from '../../controllers/user/user.controller';

const authController = new AuthController();
const userController = new UserController();
const storeInstance = new Store();

export default class ProfileBlock extends Block {
	constructor(props: ProfileBlockType) {
		const modal = new Modal({
			title: 'Загрузить аватар',
			btnText: 'Добавить',
			typeInput: {
				label: '',
				type: 'file',
				value: '',
				name: 'avatar',
			},
			events: {
				submit: (event: Event) => {
					event.preventDefault();
					const form = event.target as HTMLFormElement;
					const formData = new FormData(form);
					userController.avatarEdit(formData);
					modal.hide();
				},
			},
		});
		modal.hide();
		const components = {
			buttonAvatar: new ButtonAvatar({
				events: {
					click: () => {
						modal.show();
					},
				},
			}),
			profileBlockItem: props.inputList.map(data => new ProfileBlockItem({...data, tagName: 'li', value: () => get(storeInstance.getState(), `user.${data.name}`)}, storeInstance)),
			linkProfileEdit: new Link({
				linkName: 'Изменить данные',
				events: {
					click: (event: Event) => {
						event.preventDefault();
						router.go('/profileEdit');
					},
				},
			}),
			linkPasswordEdit: new Link({
				linkName: 'Изменить пароль',
				events: {
					click: (event: Event) => {
						event.preventDefault();
						router.go('/password');
					},
				},
			}),
			linkLogout: new Link({
				linkName: 'Выйти',
				events: {
					click: (event: Event) => {
						event.preventDefault();
						authController.logout();
					},
				},
			}),
			modal,
		};
		super('div', {...props, components}, storeInstance);
	}

	render(): Function {
		return Handlebars.compile(ProfileBlockTmpl);
	}
}
