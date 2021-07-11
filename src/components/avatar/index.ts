import Handlebars from 'handlebars';
import AvatarTmpl from './avatar.tmpl';
import Block from '../../modules/Block';
import {AvatarType} from './avatar.type';
import Store from '../../modules/Store';
import {EVENTS} from '../../modules/Store/events';

export default class Avatar extends Block {
	constructor(props: AvatarType) {
		super('div', {...props});
	}

	componentDidMount() {
		Store.eventBus.on(EVENTS.FLOW_SDU, this.setProps.bind(this, this.props));
	}

	render(): Function {
		return Handlebars.compile(AvatarTmpl);
	}
}

