// @ts-ignore
import Handlebars from 'handlebars';
import ProfileBlockTmpl from './profileBlock.tmpl';
import Block from '../../modules/Block';
import Avatar from '../avatar';
import {ProfileBlockType} from './profileBlock.type';
import ProfileBlockItem from '../profileBlockItem';

export default class ProfileBlock extends Block {
	constructor(props: ProfileBlockType) {
		const components = {
			avatar: new Avatar({imgSrc: props.imgSrc}),
			profileBlockItem: props.inputList.map(data => new ProfileBlockItem({...data, tagName: 'li'})),
		};
		super('div', {...props, components});
	}

	render(): Function {
		return Handlebars.compile(ProfileBlockTmpl);
	}
}
