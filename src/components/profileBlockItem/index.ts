import Handlebars from 'handlebars';
import Block from '../../modules/Block';
import {ProfileBlockItemType} from './profileBlockItem.type';
import profileBlockItemTmpl from './profileBlockItem.tmpl';
import Store from '../../modules/Store';
import {EVENTS} from '../../modules/Store/events';

export default class ProfileBlockItem extends Block {
	constructor(props: ProfileBlockItemType) {
		super(props.tagName, {...props});
	}

	componentDidMount() {
		Store.eventBus.on(EVENTS.FLOW_SDU, this.setProps.bind(this, this.props));
	}

	render(): Function {
		return Handlebars.compile(profileBlockItemTmpl);
	}
}
