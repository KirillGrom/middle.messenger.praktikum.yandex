import ProfileTmpl from './profile.tmpl';
import Block from '../../modules/Block';
import parseTmpl from '../../utils/parseTmpl';
import ProfileBlock from '../profileBlock';
import ProfileEdit from '../profileEdit';
import {ProfileType} from './profile.type';

export default class Profile extends Block {
	props:ProfileType;
	constructor(props:ProfileType) {
		super(ProfileTmpl, props);
	}

	render(): string {
		const name = this.props.name ? this.props.name : '';
		const profileBlock = this.props.isEdit
			? new ProfileEdit({imgSrc: this.props.imgSrc, name, inputList: this.props.inputList})
			: new ProfileBlock({imgSrc: this.props.imgSrc, name: this.props.name ? this.props.name : '', inputList: this.props.inputList});
		this.components = {
			profileBlock,
		};
		this.source = parseTmpl.call(this);
		const ctx = this._compile();
		return ctx(this.props);
	}
}
