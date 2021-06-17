import ChatListTmpl from './chatList.tmpl';
import Block from '../../modules/Block';
import ChatItem from '../chatItem';
import parseTmpl from '../../utils/parseTmpl';
import {ChatListType} from './chatList.type';

export default class ChatList extends Block {
	props: ChatListType;
	constructor(props:ChatListType) {
		super(ChatListTmpl, props);
	}

	render() {
		this.components = {
			chatItems: this.props.chatItems.map(prop => new ChatItem({...prop})),
		};

		this.source = parseTmpl.call(this);

		const ctx = this._compile();
		return ctx(this.props);
	}
}
