import AvatarTmpl from './avatar.tmpl';
import Block from '../../modules/Block';
import {AvatarType} from './avatar.type';

export default class Avatar extends Block {
	constructor(props:AvatarType) {
		super(AvatarTmpl, props);
	}
}

