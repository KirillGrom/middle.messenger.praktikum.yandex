import AuthApi from '../../api/auth';
import router from '../../services/router';
import validatorForm from '../../utils/validatorForm';
import {singInRules, singUpRules} from './validate.rules';
import Store from '../../modules/Store';
import {signUpType, singInType} from './auth.type';
import enrichUrl, {API_HOST} from '../../utils/enrichUrl';

const storeInstance = new Store();
const authApi = new AuthApi(API_HOST);
const singUpValidator = validatorForm(singUpRules);
const singInpValidator = validatorForm(singInRules);

export default class AuthController {
	public async signUp(data: signUpType): Promise<void> {
		if (!singUpValidator(data)) {
			return;
		}

		try {
			const {status} = await authApi.singUp(data);
			if (status === 200) {
				router.go('/');
			}
		} catch (error) {
			throw Error(error);
		}
	}

	public async signIn(data: singInType): Promise<void> {
		if (!singInpValidator(data)) {
			return;
		}

		try {
			const response = await authApi.signIn(data);
			if (response.status === 200) {
				router.go('/');
			}
		} catch (error) {
			throw Error(error);
		}
	}

	public async user(): Promise<void> {
		try {
			const {status, response} = await authApi.user();
			if (status === 200) {
				const data = JSON.parse(response);
				data.avatar = enrichUrl(`resources/${data.avatar}`);
				storeInstance.commit('user', data);
			}
		} catch (error) {
			throw Error(error);
		}
	}

	public async logout(): Promise<void> {
		try {
			const response = await authApi.logout();
			if (response.status === 200) {
				router.go('/login');
			}
		} catch (error) {
			throw Error(error);
		}
	}
}
