import BaseApi from '../../modules/http/baseApi';
import {AddUsersOrDeleteType, ChatCreateType, ChatType} from '../../controllers/chat/chat.type';

export default class ChatApi extends BaseApi {
	constructor(baseUrl: string) {
		super({baseUrl, endpoint: 'chats'});
	}

	public async chats(data: ChatType): Promise<XMLHttpRequest> {
		const options = {
			data: JSON.stringify(data),
			timeout: 3000,
			headers: {
				'content-type': 'application/json',
			},
		};
		const response = await this.http.get(this.getUrl(''), options);
		return response;
	}

	public async createChat(data: ChatCreateType): Promise<XMLHttpRequest> {
		const options = {
			data: JSON.stringify(data),
			timeout: 3000,
			headers: {
				'content-type': 'application/json',
			},
		};
		const response = await this.http.post(this.getUrl(''), options);
		return response;
	}

	public async addUsers(data: AddUsersOrDeleteType): Promise<XMLHttpRequest> {
		const options = {
			data: JSON.stringify(data),
			timeout: 3000,
			headers: {
				'content-type': 'application/json',
			},
		};
		const response = await this.http.put(this.getUrl('users'), options);
		return response;
	}

	public async deleteUsers(data: AddUsersOrDeleteType): Promise<XMLHttpRequest> {
		const options = {
			data: JSON.stringify(data),
			timeout: 3000,
			headers: {
				'content-type': 'application/json',
			},
		};
		const response = await this.http.delete(this.getUrl('users'), options);
		return response;
	}

	public async chatToken(id: string): Promise<XMLHttpRequest> {
		const options = {
			timeout: 3000,
			headers: {
				'content-type': 'application/json',
			},
		};
		const response = await this.http.post(this.getUrl(`token/${id}`), options);
		return response;
	}
}
