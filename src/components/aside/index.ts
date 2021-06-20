import asideTmpl from './aside.tmpl';
import Block from '../../modules/Block';
import Link from '../link';
import Search from '../search';
import ChatList from '../chatList';
import ChatListData from '../chatList/chatList.data';
export default class Aside extends Block {
	constructor(props:any) {
		const components = {
			link: new Link({
				href: '/profile.html',
				class: ['link', 'link--gray', 'aside__link'],
				linkName: 'Профиль',
			}),
			search: new Search({text: 'Поиск', class: ['search']}),
			chatList: new ChatList({
				chatItems: ChatListData.contentList,
				class: ['chat-wrapper'],
			}),
		};
		super('aside', {...props, components});
	}

	render():HTMLElement {
		return this._compile(asideTmpl)({
			...this.props,
			components: {
				search: this.props.components.search.getContent(),
				link: this.props.components.link.getContent(),
				chatList: this.props.components.chatList.getContent(),
			},
		},
		);
	}
}
