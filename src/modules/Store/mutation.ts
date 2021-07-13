import {TokenResponseType, UserType} from '../../controllers/auth/auth.type';
import {ChatItemType} from '../../components/chatItem/chatItem.type';
import {ChatResponseType} from "../../controllers/chat/chat.type";

export default {
	user: (state: Record<string, any>, payload: UserType) => {
		state.user = payload;
		return state;
	},

	chats: (state: Record<string, any>, payload: ChatItemType) => {
		state.chats = payload;
		return state;
	},

	chatToken: (state: Record<string, any>, payload: TokenResponseType) => {
		state.chatToken = payload.token;
		return state;
	},

	currentChat: (state: Record<string, any>, chat: ChatResponseType) => {
		state.currentChat = chat;
		return state;
	},

	message: (state: Record<string, any>, message: any) => {
		state.message = [...state.message, ...message];
		return state;
	},

	clearMessage: (state: Record<string, any>) => {
		state.message = [];
		return state;
	},
};
