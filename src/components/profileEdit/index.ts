import Handlebars from 'handlebars';
import profileEditTmpl from './profileEdit.tmpl';
import Block from '../../modules/Block';
import Avatar from '../avatar';
import {ProfileEditType} from './profileEdit.type';
import ProfileBlockItem from '../profileBlockItem';
import get from '../../utils/get';
import Store from '../../modules/Store';
import {EVENTS} from '../../modules/Store/events';

export default class ProfileEdit extends Block {
	constructor(props: ProfileEditType) {
		const components = {
			avatar: new Avatar({
				imgSrc: () => get(Store.getState(), 'user.avatar'),
			}),
			profileBlockItem: props.inputList.map(data => new ProfileBlockItem({...data, tagName: 'div', value: () => get(Store.getState(), `user.${data.name}`)}, Store)),
		};
		super('form', {...props, components});
	}

	componentDidMount() {
		Store.eventBus.on(EVENTS.FLOW_SDU, this.setProps.bind(this, this.props));
	}

	render(): Function {
		return Handlebars.compile(profileEditTmpl);
	}
}
