import {UserType} from '../../controllers/auth/auth.type';
import {ChatItemType} from '../../components/chatItem/chatItem.type';
import {ChatMessageResponse} from '../../controllers/chat/chat.type';

export type TokenType = string;

export type StoreType = {
	user: UserType | Object;
	chats: ChatItemType[] | [];
	chatToken: TokenType | '';
	currentChat: ChatItemType | {};
	message: ChatMessageResponse[] | [];
}
