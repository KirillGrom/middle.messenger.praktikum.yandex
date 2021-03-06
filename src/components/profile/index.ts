import Handlebars from 'handlebars';
import ProfileTmpl from './profile.tmpl';
import Block from '../../modules/Block';
import ProfileBlock from '../profileBlock';
import ProfileEdit from '../profileEdit';
import {ProfileType, typeEdit} from './profile.type';
import FormService from '../../modules/Form';
import ProfileButton from '../profileButton';
import router from '../../services/router';
import UserController from '../../controllers/user/user.controller';
import getFormDataValue from '../../utils/getFormDataValue';
import {Valid} from '../../utils/constants/valid';

export default class Profile extends Block {
	constructor(props: ProfileType) {
		const components = {
			profileEdit: new ProfileEdit({
				inputList: props.inputList,
				events: {
					focusout: (event: Event) => {
						FormService.inputEventHandler(event);
					},
					focusin: (event: Event) => {
						FormService.inputEventHandler(event);
					},
					submit: async (event: Event) => {
						event.preventDefault();
						const form = event.target as HTMLFormElement;
						const formData = new FormData(form);
						try {
							if (props.typeEdit === typeEdit.profile) {
								await UserController.profileEdit(getFormDataValue(formData));
							}

							if (props.typeEdit === typeEdit.password) {
								await UserController.passwordEdit(getFormDataValue(formData));
							}
						} catch (error) {
							if (error.message === Valid.noValid) {
								FormService.showNoValidField(event);
							}
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
						router.go('/');
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
