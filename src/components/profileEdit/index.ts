// @ts-ignore
import Handlebars from 'handlebars';
import profileEditTmpl from './profileEdit.tmpl';
import Block from '../../modules/Block';
import Avatar from '../avatar';
import {ProfileEditType} from './profileEdit.type';
import ProfileBlockItem from '../profileBlockItem';
import get from '../../utils/get';
import Store from '../../modules/Store';

const storeInstance = new Store();

export default class ProfileEdit extends Block {
	constructor(props: ProfileEditType) {
		const components = {
			avatar: new Avatar({
				imgSrc: () => get(storeInstance.getState(), 'user.avatar'),
			}, storeInstance),
			profileBlockItem: props.inputList.map(data => new ProfileBlockItem({...data, tagName: 'div', value: () => get(storeInstance.getState(), `user.${data.name}`)}, storeInstance)),
		};
		super('form', {...props, components});
	}

	render(): Function {
		return Handlebars.compile(profileEditTmpl);
	}
}
