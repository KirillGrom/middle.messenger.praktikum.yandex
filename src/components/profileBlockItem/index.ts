import Block from '../../modules/Block';
import {ProfileBlockItemType} from './profileBlockItem.type';
import profileBlockItemTmpl from './profileBlockItem.tmpl';

export default class ProfileBlockItem extends Block {
	constructor(props:ProfileBlockItemType) {
		super(props.tagName, props);
	}

	render(): HTMLElement {
		return this._compile(profileBlockItemTmpl)(this.props);
	}
}
