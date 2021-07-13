import BaseApi from '../../modules/http/baseApi';
import {signUpData, singInData} from '../../controllers/auth/auth.type';

class AuthApi extends BaseApi {
	constructor() {
		super({endpoint: 'auth'});
	}

	public singUp(data: signUpData): Promise<XMLHttpRequest> {
		const options = {
			data: JSON.stringify(data),
			timeout: 3000,
			headers: {
				'content-type': 'application/json',
			},
			IsWithCredentials: false,
		};

		return this.http.post(this.getUrl('signup'), options);
	}

	public signIn(data: singInData): Promise<XMLHttpRequest> {
		const options = {
			data: JSON.stringify(data),
			timeout: 3000,
			headers: {
				'content-type': 'application/json',
			},
		};

		return this.http.post(this.getUrl('signin'), options);
	}

	public user(): Promise<XMLHttpRequest> {
		const options = {
			timeout: 3000,
			headers: {},
		};

		return this.http.get(this.getUrl('user'), options);
	}

	public logout(): Promise<XMLHttpRequest> {
		const options = {
			timeout: 3000,
			credentials: 'include',
			headers: {
				'content-type': 'application/json',
			},
		};
		return this.http.post(this.getUrl('logout'), options);
	}
}

export default new AuthApi();
