import AuthApi from '../../api/auth';
import router from '../../services/router';
import validatorForm from '../../utils/validatorForm';
import {singInRules, singUpRules} from './validate.rules';
import Store from '../../modules/Store';
import {signUpData, singInData} from './auth.type';
import enrichUrl from '../../utils/enrichUrl';
import {Valid} from '../../utils/constants/valid';

const singUpValidator = validatorForm(singUpRules);
const singInValidator = validatorForm(singInRules);

class AuthController {
	public async signUp(data: signUpData): Promise<void> {
		if (!singUpValidator(data)) {
			throw Error(Valid.noValid);
		}

		try {
			const {status} = await AuthApi.singUp(data);
			if (status === 200) {
				router.go('/');
			}
		} catch (error) {
			throw Error(error);
		}
	}

	public async signIn(data: singInData): Promise<void> {
		if (!singInValidator(data)) {
			throw Error(Valid.noValid);
		}

		try {
			const response = await AuthApi.signIn(data);
			if (response.status === 200) {
				router.go('/');
			}
		} catch (error) {
			throw Error(error);
		}
	}

	public async user(): Promise<void> {
		try {
			const {status, response} = await AuthApi.user();
			if (status === 200) {
				const data = JSON.parse(response);
				data.avatar = data.avatar === null ? '' : enrichUrl(`resources/${data.avatar}`);
				Store.commit('user', data);
			} else {
				router.go('/login');
			}
		} catch (error) {
			throw Error(error);
		}
	}

	public async logout(): Promise<void> {
		try {
			const response = await AuthApi.logout();
			if (response.status === 200) {
				router.go('/login');
			}
		} catch (error) {
			throw Error(error);
		}
	}
}

export default new AuthController();
