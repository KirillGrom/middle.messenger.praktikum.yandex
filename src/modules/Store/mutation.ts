import {TokenResponseType, UserType} from '../../controllers/auth/auth.type';
import {ChatItemType} from '../../components/chatItem/chatItem.type';
import {ChatMessageResponse} from '../../controllers/chat/chat.type';
import {StoreType} from './store.type';

export default {
	user: (state: StoreType, payload: UserType) => {
		state.user = payload;
		return state;
	},

	chats: (state: StoreType, payload: ChatItemType[]) => {
		state.chats = payload;
		return state;
	},

	chatToken: (state: StoreType, payload: TokenResponseType) => {
		state.chatToken = payload.token;
		return state;
	},

	currentChat: (state: StoreType, chat: ChatItemType) => {
		state.currentChat = chat;
		return state;
	},

	message: (state: StoreType, message: ChatMessageResponse[]) => {
		state.message = [...state.message, ...message];
		return state;
	},

	clearMessage: (state: StoreType) => {
		state.message = [];
		return state;
	},
};
