import BaseApi from '../../modules/http/baseApi';
import {AddUsersOrDeleteData, ChatCreateData, ChatData} from '../../controllers/chat/chat.type';

class ChatApi extends BaseApi {
	constructor() {
		super({endpoint: 'chats'});
	}

	public chats(data: ChatData): Promise<XMLHttpRequest> {
		const options = {
			data: JSON.stringify(data),
			timeout: 3000,
			headers: {
				'content-type': 'application/json',
			},
		};

		return this.http.get(this.getUrl(''), options);
	}

	public createChat(data: ChatCreateData): Promise<XMLHttpRequest> {
		const options = {
			data: JSON.stringify(data),
			timeout: 3000,
			headers: {
				'content-type': 'application/json',
			},
		};

		return this.http.post(this.getUrl(''), options);
	}

	public addUsers(data: AddUsersOrDeleteData): Promise<XMLHttpRequest> {
		const options = {
			data: JSON.stringify(data),
			timeout: 3000,
			headers: {
				'content-type': 'application/json',
			},
		};

		return this.http.put(this.getUrl('users'), options);
	}

	public deleteUsers(data: AddUsersOrDeleteData): Promise<XMLHttpRequest> {
		const options = {
			data: JSON.stringify(data),
			timeout: 3000,
			headers: {
				'content-type': 'application/json',
			},
		};

		return this.http.delete(this.getUrl('users'), options);
	}

	public chatToken(id: string): Promise<XMLHttpRequest> {
		const options = {
			timeout: 3000,
			headers: {
				'content-type': 'application/json',
			},
		};

		return this.http.post(this.getUrl(`token/${id}`), options);
	}
}

export default new ChatApi();
