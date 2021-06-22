// @ts-ignore
import Handlebars from 'handlebars';
import AvatarTmpl from './avatar.tmpl';
import Block from '../../modules/Block';
import {AvatarType} from './avatar.type';

export default class Avatar extends Block {
	constructor(props: AvatarType) {
		super('div', props);
	}

	render(): Function {
		return Handlebars.compile(AvatarTmpl);
	}
}

