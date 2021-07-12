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
import FormService from '../../modules/Form';
import {Valid} from '../../utils/constants/valid';
import {EVENTS} from '../../modules/Store/events';

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
					try {
						UserController.avatarEdit(formData);
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
			buttonAvatar: new ButtonAvatar({
				events: {
					click: () => {
						modal.show();
					},
				},
			}),
			profileBlockItem: props.inputList.map(data =>
				new ProfileBlockItem(
					{...data, tagName:
						'li', value: () => get(Store.getState(),
						`user.${data.name}`)}
				)),

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
						try {
							AuthController.logout();
						} catch (error) {}
					},
				},
			}),
			modal,
		};
		super('div', {...props, components});
	}

	componentDidMount() {
		Store.eventBus.on(EVENTS.FLOW_SDU, this.setProps.bind(this, this.props));
	}

	render(): Function {
		return Handlebars.compile(ProfileBlockTmpl);
	}
}
