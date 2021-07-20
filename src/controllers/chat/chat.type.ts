import {UserType} from '../auth/auth.type';

export type ChatData = {
	offset: number;
	limit: number;
	title: string;
}

export type ChatCreateData = {
	title: string;
}

export type AddUsersOrDeleteData = {
	users: number[];
	chatId: number;
}

export type ChatsResponseType = {
	chats: ChatResponseType[];
}

type UserChatResponse = Omit<UserType, 'id' | 'display_name' >

export type ChatResponseType = {
	id: number;
	title: string;
	avatar: string;
	'unread_count': number;
	'last_message': {
		user?: UserChatResponse;
		'time': string;
		'content': string;
	}
}

export type ChatMessage = {
	message: string;
}

export type ChatMessageResponse = {
	'chat_id': number;
	content: string;
	file: null;
	id: number;
	'is_read': false;
	time: string;
	type: string;
	'user_id': number;
}
