import UserApi from '../../api/user';
import {passwordEditRules, profileEditRules, userSearchRules} from './validate.rules';
import validatorForm from '../../utils/validatorForm';
import router from '../../services/router';
import {passwordEditType, profileEditType, userSearch} from './user.type';
import Store from '../../modules/Store';
import enrichUrl from '../../utils/enrichUrl';
import {UserType} from '../auth/auth.type';

const storeInstance = new Store();
const userApi = new UserApi('https://ya-praktikum.tech/api/v2');
const profileEditValidator = validatorForm(profileEditRules);
const passwordEditValidator = validatorForm(passwordEditRules);
const userSearchValidator = validatorForm(userSearchRules);

export default class UserController {
	public async profileEdit(data: profileEditType): Promise<void> {
		if (!profileEditValidator(data)) {
			return;
		}

		try {
			const {status} = await userApi.profileEdit(data);
			if (status === 200) {
				router.go('/profile');
			}
		} catch (error) {
			throw Error(error);
		}
	}

	public async passwordEdit(data: passwordEditType): Promise<void> {
		if (!passwordEditValidator(data)) {
			return;
		}

		try {
			const {status} = await userApi.passwordEdit(data);
			if (status === 200) {
				router.go('/profile');
			}
		} catch (error) {
			throw Error(error);
		}
	}

	public async userById(id: string): Promise<void> {
		try {
			const {status, response} = await userApi.userById(id);
			if (status === 200) {
				console.log(response);
			}
		} catch (error) {
			throw Error(error);
		}
	}

	public async userSearch(data: userSearch): Promise<UserType[] | undefined> {
		if (!userSearchValidator(data)) {
			return;
		}

		try {
			const {status, response} = await userApi.userSearch(data);
			if (status === 200) {
				return JSON.parse(response);
			}
		} catch (error) {
			throw Error(error);
		}
	}

	public async avatarEdit(data: FormData): Promise<void> {
		try {
			const {status, response} = await userApi.avatarEdit(data);
			if (status === 200) {
				const data = JSON.parse(response);
				data.avatar = enrichUrl(`resources/${data.avatar}`);
				storeInstance.commit('user', data);
			}
		} catch (error) {
			throw Error(error);
		}
	}
}
