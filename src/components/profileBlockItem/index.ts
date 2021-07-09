// @ts-ignore
import Handlebars from 'handlebars';
import Block from '../../modules/Block';
import {ProfileBlockItemType} from './profileBlockItem.type';
import profileBlockItemTmpl from './profileBlockItem.tmpl';
import Store from '../../modules/Store';

export default class ProfileBlockItem extends Block {
	constructor(props: ProfileBlockItemType, store?: Store) {
		super(props.tagName, {...props}, store);
	}

	render(): Function {
		return Handlebars.compile(profileBlockItemTmpl);
	}
}
