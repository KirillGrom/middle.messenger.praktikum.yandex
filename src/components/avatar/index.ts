// @ts-ignore
import Handlebars from 'handlebars';
import AvatarTmpl from './avatar.tmpl';
import Block from '../../modules/Block';
import {AvatarType} from './avatar.type';
import Store from '../../modules/Store';
export default class Avatar extends Block {
	constructor(props: AvatarType, store?: Store) {
		super('div', {...props}, store);
	}

	render(): Function {
		return Handlebars.compile(AvatarTmpl);
	}
}

