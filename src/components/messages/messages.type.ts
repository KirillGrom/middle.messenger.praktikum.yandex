export type MessageTypeData = {
    type:string;
    text:string;
    time:string;
}

export type MessagesTypeData = {
    date: string;
    messages: MessageTypeData[];
}

export type MessagesType = {
    messages: MessagesTypeData[];
    class: string[];
}

