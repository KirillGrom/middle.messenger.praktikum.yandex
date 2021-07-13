import BaseApi from '../../modules/http/baseApi';
import {passwordEditData, profileEditData, userSearchData} from '../../controllers/user/user.type';

class UserApi extends BaseApi {
	constructor() {
		super({endpoint: 'user'});
	}

	public profileEdit(data: profileEditData): Promise<XMLHttpRequest> {
		const options = {
			data: JSON.stringify(data),
			timeout: 3000,
			headers: {
				'content-type': 'application/json',
			},
		};

		return this.http.put(this.getUrl('profile'), options);
	}

	public avatarEdit(data: FormData): Promise<XMLHttpRequest> {
		const options = {
			data,
			timeout: 3000,
			headers: {},
		};

		return this.http.put(this.getUrl('profile/avatar'), options);
	}

	public passwordEdit(data: passwordEditData): Promise<XMLHttpRequest> {
		const options = {
			data: JSON.stringify(data),
			timeout: 3000,
			headers: {
				'content-type': 'application/json',
			},
		};

		return this.http.put(this.getUrl('password'), options);
	}

	public userById(id: string) {
		const options = {
			timeout: 3000,
			headers: {
				'content-type': 'application/json',
			},
		};

		return this.http.get(this.getUrl(`${id}`), options);
	}

	public userSearch(data: userSearchData) {
		const options = {
			data: JSON.stringify(data),
			timeout: 3000,
			headers: {
				'content-type': 'application/json',
			},
		};

		return this.http.post(this.getUrl('search'), options);
	}
}

export default new UserApi();
