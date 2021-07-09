import BaseApi from '../../modules/http/baseApi';
import {passwordEditType, profileEditType, userSearch} from '../../controllers/user/user.type';

export default class UserApi extends BaseApi {
	constructor(baseUrl:string) {
		super({baseUrl, endpoint: 'user'});
	}

	public async profileEdit(data: profileEditType): Promise<XMLHttpRequest> {
		const options = {
			data: JSON.stringify(data),
			timeout: 3000,
			headers: {
				'content-type': 'application/json',
			},
		};
		const response = await this.http.put(this.getUrl('profile'), options);
		return response;
	}

	public async avatarEdit(data: FormData): Promise<XMLHttpRequest> {
		const options = {
			data,
			timeout: 3000,
			headers: {},
		};
		const response = await this.http.put(this.getUrl('profile/avatar'), options);
		return response;
	}

	public async passwordEdit(data: passwordEditType): Promise<XMLHttpRequest> {
		const options = {
			data: JSON.stringify(data),
			timeout: 3000,
			headers: {
				'content-type': 'application/json',
			},
		};
		const response = await this.http.put(this.getUrl('password'), options);
		return response;
	}

	public async userById(id: string) {
		const options = {
			timeout: 3000,
			headers: {
				'content-type': 'application/json',
			},
		};
		const response = await this.http.get(this.getUrl(`${id}`), options);
		return response;
	}

	public async userSearch(data: userSearch) {
		const options = {
			data: JSON.stringify(data),
			timeout: 3000,
			headers: {
				'content-type': 'application/json',
			},
		};
		const response = await this.http.post(this.getUrl('search'), options);
		return response;
	}
}
