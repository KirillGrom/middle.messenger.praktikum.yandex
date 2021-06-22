// @ts-ignore
import Handlebars from 'handlebars';
import profileEditTmpl from './profileEdit.tmpl';
import Block from '../../modules/Block';
import Avatar from '../avatar';
import {ProfileEditType} from './profileEdit.type';
import ProfileBlockItem from '../profileBlockItem';

export default class ProfileEdit extends Block {
	constructor(props: ProfileEditType) {
		const components = {
			avatar: new Avatar({
				imgSrc: props.imgSrc,
			}),
			profileBlockItem: props.inputList.map(data => new ProfileBlockItem({...data, tagName: 'div'})),
		};
		super('form', {...props, components});
	}

	render(): Function {
		return Handlebars.compile(profileEditTmpl);
	}
}
