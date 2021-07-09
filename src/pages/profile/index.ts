// @ts-ignore
import Handlebars from 'handlebars';
import Block from '../../modules/Block';
import Profile from '../../components/profile';
import ProfileBlockData from '../../components/profileBlock/profileBlock.data';
import profileTmpl from './profile.tmpl';
import AuthController from '../../controllers/auth/auth.controller';
import {typeEdit} from '../../components/profile/profile.type';

const authController = new AuthController();

export default class ProfilePage extends Block {
	constructor() {
		authController.user();
		const components = {
			profile: new Profile(
				{
					typeEdit: typeEdit.profile,
					inputList: ProfileBlockData,
					isEdit: false,
				},
			),
		};

		super('div', {components});
	}

	render(): Function {
		return Handlebars.compile(profileTmpl);
	}
}

