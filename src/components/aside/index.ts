import asideTmpl from './aside.tmpl';
import Block from '../../modules/Block';
import parseTmpl from '../../utils/parseTmpl';
import Link from '../link';
import Search from '../search';
import ChatList from '../chatList';
import ChatListData from '../chatList/chatList.data';

export default class Aside extends Block {
	constructor(props = {}) {
		super(asideTmpl, props);
	}

	render() {
		this.components = {
			link: new Link({
				href: '/profile.html',
				class: 'link--gray aside__link',
				linkName: 'Профиль',
			}),
			search: new Search({text: 'Поиск'}),
			chatList: new ChatList({
				chatItems: ChatListData.contentList,
			}),
		};
		this.source = parseTmpl.call(this);
		const ctx = this._compile();
		return ctx(this.props);
	}
}
