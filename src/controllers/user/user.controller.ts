import UserApi from '../../api/user';
import {passwordEditRules, profileEditRules, userSearchRules} from './validate.rules';
import validatorForm from '../../utils/validatorForm';
import router from '../../services/router';
import {passwordEditData, profileEditData, userSearchData} from './user.type';
import Store from '../../modules/Store';
import enrichUrl from '../../utils/enrichUrl';
import {UserType} from '../auth/auth.type';

const profileEditValidator = validatorForm(profileEditRules);
const passwordEditValidator = validatorForm(passwordEditRules);
const userSearchValidator = validatorForm(userSearchRules);

class UserController {
	public async profileEdit(data: profileEditData): Promise<void> {
		if (!profileEditValidator(data)) {
			return;
		}

		try {
			const {status} = await UserApi.profileEdit(data);
			if (status === 200) {
				router.go('/profile');
			}
		} catch (error) {
			throw Error(error);
		}
	}

	public async passwordEdit(data: passwordEditData): Promise<void> {
		if (!passwordEditValidator(data)) {
			return;
		}

		try {
			const {status} = await UserApi.passwordEdit(data);
			if (status === 200) {
				router.go('/profile');
			}
		} catch (error) {
			throw Error(error);
		}
	}

	public async userById(id: string): Promise<void> {
		try {
			const {status, response} = await UserApi.userById(id);
			if (status === 200) {
				console.log(response);
			}
		} catch (error) {
			throw Error(error);
		}
	}

	public async userSearch(data: userSearchData): Promise<UserType[] | undefined> {
		if (!userSearchValidator(data)) {
			return;
		}

		try {
			const {status, response} = await UserApi.userSearch(data);
			if (status === 200) {
				return JSON.parse(response);
			}
		} catch (error) {
			throw Error(error);
		}
	}

	public async avatarEdit(data: FormData): Promise<void> {
		try {
			const {status, response} = await UserApi.avatarEdit(data);
			if (status === 200) {
				const data = JSON.parse(response);
				data.avatar = enrichUrl(`resources/${data.avatar}`);
				Store.commit('user', data);
			}
		} catch (error) {
			throw Error(error);
		}
	}
}

export default new UserController();
