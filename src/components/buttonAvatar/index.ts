import Handlebars from 'handlebars';
import Block from '../../modules/Block';
import Avatar from '../avatar';
import get from '../../utils/get';
import Store from '../../modules/Store';
import {ButtonAvatarType} from './buttonAvatar.type';
import ButtonAvatarTmpl from './buttonAvatar.tmpl';
import {EVENTS} from '../../modules/Store/events';

export default class ButtonAvatar extends Block {
	constructor(props: ButtonAvatarType) {
		const components = {
			avatar: new Avatar({
				imgSrc: () => get(Store.getState(), 'user.avatar'),
			}),
		};
		super('button', {...props, components});
	}

	componentDidMount() {
		Store.eventBus.on(EVENTS.FLOW_SDU, this.setProps.bind(this, this.props));
	}

	render(): Function {
		return Handlebars.compile(ButtonAvatarTmpl);
	}
}
