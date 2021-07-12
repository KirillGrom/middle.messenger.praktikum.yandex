import Store from '../../modules/Store';
import ChatApi from '../../api/chat';
import {
	AddUsersOrDeleteData,
	ChatCreateData,
	ChatData,
	ChatMessage,
	ChatResponseType,
} from './chat.type';
import mapChats from '../../utils/mapChats';
import router from '../../services/router';
import {userSearchData} from '../user/user.type';
import UserController from '../user/user.controller';
import get from '../../utils/get';
import WebSocketModule from '../../modules/WebSocketModule';
import validatorForm from '../../utils/validatorForm';
import {loginRules, messageRules} from './validate.rules';
import {Valid} from '../../utils/constants/valid';

const webSocketModule = new WebSocketModule();
const loginValidator = validatorForm(loginRules);
const messageValidator = validatorForm(messageRules);

class ChatController {
	public async chats(data: ChatData): Promise<void> {
		try {
			const {status, response} = await ChatApi.chats(data);
			if (status === 200) {
				Store.commit('chats', JSON.parse(response).map((res: ChatResponseType) => mapChats(res)));
			} else {
				router.go('/login');
			}
		} catch (error) {
			throw Error(error);
		}
	}

	public async createChat(data: ChatCreateData): Promise<void> {
		try {
			const {status} = await ChatApi.createChat(data);
			if (status === 200) {
				await this.chats({offset: 0, limit: 10, title: data.title});
			}
		} catch (error) {
			throw Error(error);
		}
	}

	public async chatToken(id: string): Promise<void> {
		try {
			const {status, response} = await ChatApi.chatToken(id);
			if (status === 200) {
				Store.commit('chatToken', JSON.parse(response));
			}
		} catch (error) {
			throw Error(error);
		}
	}

	public async chatItemHandler(chatId: string): Promise<void> {
		if (router.getCurrentPathName() === '/') {
			router.go('/chats');
		}

		if (chatId !== get(Store.getState(), 'currentChatId')) {
			Store.commit('currentChatId', chatId);
			await this.chatToken(chatId);
			webSocketModule.connect();
		}
	}

	public async addUsers(data: userSearchData): Promise<void> {
		if (!loginValidator) {
			throw Error(Valid.noValid);
		}

		try {
			const users = await UserController.userSearch(data);
			if (Array.isArray(users) && users.length) {
				const chatId: number = get(Store.getState(), 'currentChatId');
				const {id} = users[0];
				const addUser: AddUsersOrDeleteData = {
					users: [Number(id)],
					chatId,
				};
				await ChatApi.addUsers(addUser);
			}
		} catch (error) {
			throw Error(error);
		}
	}

	public async deleteUsers(data: userSearchData) {
		if (!loginValidator) {
			throw Error(Valid.noValid);
		}

		try {
			const users = await UserController.userSearch(data);
			if (Array.isArray(users) && users.length) {
				const chatId: number = get(Store.getState(), 'currentChatId');
				const {id} = users[0];
				const addUser: AddUsersOrDeleteData = {
					users: [Number(id)],
					chatId,
				};
				await ChatApi.deleteUsers(addUser);
			}
		} catch (error) {
			throw Error(error);
		}
	}

	public async sendMessage(data: ChatMessage) {
		if (!messageValidator) {
			throw Error(Valid.noValid);
		}

		await webSocketModule.sendMsg(data.message);
	}
}

export default new ChatController();
