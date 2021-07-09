import BaseApi from '../../modules/http/baseApi';
import {signUpType, singInType} from '../../controllers/auth/auth.type';

export default class AuthApi extends BaseApi {
	constructor(baseUrl:string) {
		super({baseUrl, endpoint: 'auth'});
	}

	public async singUp(data: signUpType): Promise<XMLHttpRequest> {
		const options = {
			data: JSON.stringify(data),
			timeout: 3000,
			headers: {
				'content-type': 'application/json',
			},
		};
		const response = await this.http.post(this.getUrl('signup'), options);
		return response;
	}

	public async signIn(data: singInType): Promise<XMLHttpRequest> {
		const options = {
			data: JSON.stringify(data),
			timeout: 3000,
			headers: {
				'content-type': 'application/json',
			},
		};
		const response = await this.http.post(this.getUrl('signin'), options);
		return response;
	}

	public async user(): Promise<XMLHttpRequest> {
		const options = {
			timeout: 3000,
			headers: {},
		};
		const response = await this.http.get(this.getUrl('user'), options);
		return response;
	}

	public async logout(): Promise<XMLHttpRequest> {
		const options = {
			timeout: 3000,
			credentials: 'include',
			headers: {
				'content-type': 'application/json',
			},
		};
		const response = await this.http.post(this.getUrl('logout'), options);
		return response;
	}
}
