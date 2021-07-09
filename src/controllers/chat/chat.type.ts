import {UserType} from '../auth/auth.type';

export type ChatType = {
	offset: number;
	limit: number;
	title: string;
}

export type ChatCreateType = {
	title: string;
}

export type AddUsersOrDeleteType = {
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
