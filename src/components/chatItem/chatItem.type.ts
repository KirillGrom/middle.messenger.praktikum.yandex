export type ChatItemType = {
    id: string;
    name: string;
    imgSrc: string;
    datetime: string;
    lastMessageText: string;
    countNewMessage: string;
    isCountNewMessageHidden: boolean;
    events: Record<string, Function>;
}
