import {ChatItemType} from '../chatItem/chatItem.type';

export type ChatListType = {
    chatItems: () => ChatItemType[];
    events: Record<string, Function>;
}
