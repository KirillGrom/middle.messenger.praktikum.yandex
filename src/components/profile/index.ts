// @ts-ignore
import Handlebars from 'handlebars';
import ProfileTmpl from './profile.tmpl';
import Block from '../../modules/Block';
import ProfileBlock from '../profileBlock';
import ProfileEdit from '../profileEdit';
import {ProfileType, typeEdit} from './profile.type';
import Form from '../../modules/form';
import ProfileButton from '../profileButton';
import router from '../../services/router';
import UserController from '../../controllers/user/user.controller';
import getFormDataValue from '../../utils/getFormDataValue';

const formService = new Form();
const userController = new UserController();

export default class Profile extends Block {
	constructor(props: ProfileType) {
		const components = {
			profileEdit: new ProfileEdit({
				inputList: props.inputList,
				events: {
					focusout: (event:Event) => {
						formService.inputEventHandler(event);
					},
					focusin: (event:Event) => {
						formService.inputEventHandler(event);
					},
					submit: (event:Event) => {
						formService.submit(event);
						const form = event.target as HTMLFormElement;
						const formData = new FormData(form);

						if (props.typeEdit === typeEdit.profile) {
							userController.profileEdit(getFormDataValue(formData));
						}

						if (props.typeEdit === typeEdit.password) {
							userController.passwordEdit(getFormDataValue(formData));
						}
					},
				},
			}),
			profileBlock: new ProfileBlock({
				inputList: props.inputList,
			}),
			profileButton: new ProfileButton({
				events: {
					click: (event: Event) => {
						event.preventDefault();
						router.go('/chats');
					},
				},
			}),
		};
		if (props.isEdit) {
			components.profileBlock.hide();
		} else {
			components.profileEdit.hide();
		}

		super('div', {props, components});
	}

	render(): Function {
		return Handlebars.compile(ProfileTmpl);
	}
}
