import {ChatResponseType} from '../controllers/chat/chat.type';
import enrichUrl from './enrichUrl';
import dateFormat from './dateFormat';

export default (chat: ChatResponseType) => {
	const lastMessage = chat.last_message ? chat.last_message : undefined;
	return {
		id: chat.id,
		name: chat.title,
		imgSrc: chat.avatar === null ? '' : enrichUrl(`resources/${chat.avatar}`),
		datetime: dateFormat(lastMessage?.time || ''),
		lastMessageText: lastMessage?.content || '',
		countNewMessage: chat.unread_count,
		isCountNewMessageHidden: chat.unread_count !== 0,
	};
};
