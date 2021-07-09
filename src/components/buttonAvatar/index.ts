// @ts-ignore
import Handlebars from 'handlebars';
import Block from '../../modules/Block';
import Avatar from '../avatar';
import get from '../../utils/get';
import Store from '../../modules/Store';
import {ButtonAvatarType} from './buttonAvatar.type';
import ButtonAvatarTmpl from './buttonAvatar.tmpl';

const storeInstance = new Store();

export default class ButtonAvatar extends Block {
	constructor(props: ButtonAvatarType, store?: Store) {
		const components = {
			avatar: new Avatar({
				imgSrc: () => get(storeInstance.getState(), 'user.avatar'),
			}, storeInstance),
		};
		super('button', {...props, components}, store);
	}

	render(): Function {
		return Handlebars.compile(ButtonAvatarTmpl);
	}
}
