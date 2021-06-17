import ChatItemTmpl from './chatItem.tmpl';
import Block from '../../modules/Block';
import parseTmpl from '../../utils/parseTmpl';
import Avatar from '../avatar';
import {chatItemType} from './chatItem.type';

export default class ChatItem extends Block {
	props:chatItemType
	constructor(props:chatItemType) {
		super(ChatItemTmpl, props);
	}

	render() {
		this.components = {
			avatar: new Avatar({
				imgSrc: this.props.imgSrc,
				class: '',
			}),
		};
		this.source = parseTmpl.call(this);
		const ctx = this._compile();
		return ctx(this.props);
	}
}
