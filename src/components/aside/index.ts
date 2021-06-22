// @ts-ignore
import Handlebars from 'handlebars';
import asideTmpl from './aside.tmpl';
import Block from '../../modules/Block';
import Link from '../link';
import Search from '../search';
import ChatList from '../chatList';
import ChatListData from '../chatList/chatList.data';

export default class Aside extends Block {
	constructor(props: any) {
		const components = {
			link: new Link({
				href: '/profile.html',
				linkName: 'Профиль',
			}),
			search: new Search({text: 'Поиск'}),
			chatList: new ChatList({
				chatItems: ChatListData.contentList,
			}),
		};
		super('div', {...props, components});
	}

	render(): Function {
		return Handlebars.compile(asideTmpl);
	}
}
