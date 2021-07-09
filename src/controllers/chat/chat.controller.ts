import Store from '../../modules/Store';
import ChatApi from '../../api/chat';
import {AddUsersOrDeleteType, ChatCreateType, ChatMessage, ChatResponseType, ChatType} from './chat.type';
import {API_HOST} from '../../utils/enrichUrl';
import mapChats from '../../utils/mapChats';
import router from '../../services/router';
import {userSearch} from '../user/user.type';
import UserController from '../user/user.controller';
import get from '../../utils/get';
import WebSocketModule from '../../modules/WebSocketModule';

const storeInstance = new Store();
const chatAPi = new ChatApi(API_HOST);
const userController = new UserController();
const webSocketModule = new WebSocketModule();

export default class ChatController {
	public async chats(data: ChatType): Promise<void> {
		try {
			const {response} = await chatAPi.chats(data);
			console.log(JSON.parse(response));
			storeInstance.commit('chats', JSON.parse(response).map((res: ChatResponseType) => mapChats(res)));
		} catch (error) {
			throw Error(error);
		}
	}

	public async createChat(data: ChatCreateType): Promise<void> {
		try {
			const {status} = await chatAPi.createChat(data);
			if (status === 200) {
				await this.chats({offset: 0, limit: 10, title: data.title});
			}
		} catch (error) {
			throw Error(error);
		}
	}

	public async chatToken(id: string): Promise<void> {
		try {
			const {status, response} = await chatAPi.chatToken(id);
			if (status === 200) {
				storeInstance.commit('chatToken', JSON.parse(response));
			}
		} catch (error) {
			throw Error(error);
		}
	}

	public async chatItemHandler(chatId: string): Promise<void> {
		if (router.getCurrentPathName() === '/') {
			router.go('/chats');
		}

		if (chatId !== get(storeInstance.getState(), 'currentChatId')) {
			storeInstance.commit('currentChatId', chatId);
			await this.chatToken(chatId);
			webSocketModule.connect();
		}
	}

	public async addUsers(data: userSearch): Promise<void> {
		try {
			const users = await userController.userSearch(data);
			if (Array.isArray(users) && users.length) {
				const chatId: number = get(storeInstance.getState(), 'currentChatId');
				const {id} = users[0];
				const addUser: AddUsersOrDeleteType = {
					users: [Number(id)],
					chatId,
				};
				await chatAPi.addUsers(addUser);
			}
		} catch (error) {
			throw Error(error);
		}
	}

	public async deleteUsers(data: userSearch) {
		try {
			const users = await userController.userSearch(data);
			if (Array.isArray(users) && users.length) {
				const chatId: number = get(storeInstance.getState(), 'currentChatId');
				const {id} = users[0];
				const addUser: AddUsersOrDeleteType = {
					users: [Number(id)],
					chatId,
				};
				await chatAPi.deleteUsers(addUser);
			}
		} catch (error) {
			throw Error(error);
		}
	}

	public async sendMessage(data: ChatMessage) {
		await webSocketModule.sendMsg(data.message);
	}
}
