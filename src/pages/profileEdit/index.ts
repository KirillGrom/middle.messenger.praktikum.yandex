import Handlebars from 'handlebars';
import Block from '../../modules/Block';
import Profile from '../../components/profile';
import ProfileEditData from '../../components/profileEdit/profileEdit.data';
import profileTmpl from './profileEdit.tmpl';
import AuthController from '../../controllers/auth/auth.controller';
import {typeEdit} from '../../components/profile/profile.type';

export default class ProfileEditPage extends Block {
	constructor() {
		try {
			AuthController.user();
		} catch (error) {}

		const components = {
			profile: new Profile({
				inputList: ProfileEditData,
				isEdit: true,
				typeEdit: typeEdit.profile,
			}),
		};
		super('div', {components});
	}

	render(): Function {
		return Handlebars.compile(profileTmpl);
	}
}

