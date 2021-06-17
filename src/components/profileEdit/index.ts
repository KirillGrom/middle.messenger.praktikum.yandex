import profileEditTmpl from './profileEdit.tmpl';
import Block from '../../modules/Block';
import Avatar from '../avatar';
import parseTmpl from '../../utils/parseTmpl';
import {ProfileEditType} from './profileEdit.type';

export default class ProfileEdit extends Block {
	props:ProfileEditType;
	constructor(props:ProfileEditType) {
		super(profileEditTmpl, props);
	}

	render(): string {
		this.components = {
			avatar: new Avatar({
				imgSrc: this.props.imgSrc,
				class: 'avatar--big profile-edit__avatar',
			}),
		};
		this.source = parseTmpl.call(this);
		const ctx = this._compile();
		return ctx(this.props);
	}
}
