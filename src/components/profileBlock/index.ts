import ProfileBlockTmpl from './profileBlock.tmpl';
import Block from '../../modules/Block';
import Avatar from '../avatar';
import parseTmpl from '../../utils/parseTmpl';
import {ProfileBlockType} from './profileBlock.type';

export default class ProfileBlock extends Block {
	props:ProfileBlockType
	constructor(props:ProfileBlockType) {
		super(ProfileBlockTmpl, props);
	}

	render(): string {
		this.components = {
			avatar: new Avatar({imgSrc: this.props.imgSrc, class: 'avatar--big profile-block__avatar'}),
		};

		this.source = parseTmpl.call(this);
		const cxt = this._compile();
		return cxt(this.props);
	}
}
